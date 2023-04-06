
import React, { useState, useEffect } from 'react'
import {Alert, StyleSheet, Text, View, SafeAreaView, Pressable, Image, Dimensions } from 'react-native'



const windowWidth = Dimensions.get('window').width;
function Level (props) {
    const [active_player, setActive_player] = useState('X')
    const [markers, setMarkers] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ])

      function bestMove(board) {
        let v = -Infinity;
        let move;
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            if (board[i][j] == '') {
              board[i][j] = 'X';
              let score = alphabeta(board, 0, -Infinity, Infinity, false);
              board[i][j] = '';
              if (score > v) {
                v = score;
                move = { i, j };
              }
            }
          }
        }
        board[move.i][move.j] = 'X';
        setActive_player('O')
      }
      
      let scores = {
        X: 1,
        O: -1,
        tie: 0
      };
      
      function alphabeta(board, depth, alpha, beta, isMaximizing) {
        let result = calculateWinner(board);
        if (result !== null) {
          return scores[result];
        }
      
        if (isMaximizing) {
          let v = -Infinity;
          for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
              if (board[i][j] == '') {
                board[i][j] = 'X';
                let score = alphabeta(board, depth + 1, alpha, beta, false);
                board[i][j] = '';
                if(props.level=="hard")
                v = score > v ? score : v 
                else if (props.level=='easy')
                v = score < v ? score : v 
                else if (props.level=="mid")
                v = Math.random() < 0.5 ? score : v;
                alpha = alpha > v ? alpha : v 
                if(beta < alpha || beta == alpha)
                break;
              }
            }
          }
          return v;
        } else {
          let v = Infinity;
          for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
              if (board[i][j] == '') {
                board[i][j] = 'O';
                let score = alphabeta(board, depth + 1, alpha, beta, true);
                board[i][j] = '';
                if(props.level=="hard")
                v = score < v ? score : v 
                else if (props.level=='easy')
                v = score > v ? score : v 
                else if (props.level=="mid")
                v = Math.random() < 0.5 ? score : v;
                beta = beta < v ? beta : v 
                if(beta < alpha || beta == alpha)
                break;
              }
            }
          }
          return v;
        }
      }

      const equals3 = (a, b, c) => {
        return a == b && b == c && a != '';
      }
      
    function calculateWinner(board) {
        let winner = null;
      
        // horizontal
        for (let i = 0; i < 3; i++) {
          if (equals3(board[i][0], board[i][1], board[i][2])) {
            winner = board[i][0];
          }
        }
      
        // Vertical
        for (let i = 0; i < 3; i++) {
          if (equals3(board[0][i], board[1][i], board[2][i])) {
            winner = board[0][i];
          }
        }
      
        // Diagonal
        if (equals3(board[0][0], board[1][1], board[2][2])) {
          winner = board[0][0];
        }
        if (equals3(board[2][0], board[1][1], board[0][2])) {
          winner = board[2][0];
        }
      
        let openSpots = 0;
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            if (board[i][j] == '') {
              openSpots++;
            }
          }
        }
      
        if (winner == null && openSpots == 0) {
          return 'tie';
        } else {
          return winner;
        }
      }
    
     
    const markPosition = (i,j) => {
      if(props.players=='1') {
        let temp = [...markers]
        if (active_player === 'O') {
            if (markers[i][j]=='') {
                temp[i][j] = active_player
                setMarkers(temp)
                setActive_player('X')
                if(calculateWinner(markers)===null) {
                bestMove(temp)
                setMarkers(temp)
                }
            }
          }
        }
        else if (props.players=='2') {
          if(!markers[i][j]){
            let temp = [...markers]
            temp[i][j] = active_player
            setMarkers(temp)
            if(active_player === 'X'){
              setActive_player('O')
            }else{
              setActive_player('X')
            }
          }
        }
        }

    useEffect(()=> {if(props.players=='1')bestMove(markers)},[])

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      

    const setTemp = () => {
        let temp = [ 
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ]
      var a = getRandomInt(0, 2);
      var b = getRandomInt(0, 2);
      temp[a][b] = 'X'
      setMarkers(temp)

    }

      
    const resetMarkers = () => {
      if(props.players=='1') {
        setActive_player('O')
        setTemp() }
        else if (props.players=='2') {
          setMarkers([ 
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
          ])
        }
    }

    useEffect(() => {
        const result = calculateWinner(markers);
        if(result!=null) {
        if (result == 'tie') {
          //tie
          Alert.alert('Result', 'Tie', [
            {text: 'OK', onPress: () => resetMarkers()},
          ])
          } else {
          //winning
            Alert.alert('Result', `Player ${result} Won!`, [
            {text: 'OK', onPress: () => resetMarkers()},
            ])
          }
        }
    }, [markers])
    return (
        <SafeAreaView style={styles.body}>
            <View style={[styles.playerInfo, { backgroundColor: active_player === 'X' ? '#007FF4' : '#F40075' }]}>
                <Text style={styles.playerTxt}>Player {active_player}'s turn</Text>
            </View>
            <View style={styles.mainContainer}>

                {/* Top Left Cell */}
                <Pressable style={styles.cell_top_left} onPress={() => markPosition(0,0)}>
                    {markers[0][0] === 'X' && <Image source={require('../assets/img/cross.png')} style={styles.icon} />}
                    {markers[0][0] === 'O' && <Image source={require('../assets/img/zero.png')} style={styles.icon} />}
                </Pressable>

                {/* Top Mid Cell */}
                <Pressable style={styles.cell_top_mid} onPress={() => markPosition(0,1)}>
                    {markers[0][1] === 'X' && <Image source={require('../assets/img/cross.png')} style={styles.icon} />}
                    {markers[0][1] === 'O' && <Image source={require('../assets/img/zero.png')} style={styles.icon} />}
                </Pressable>

                {/* Top Right Cell */}
                <Pressable style={styles.cell_top_right} onPress={() => markPosition(0,2)}>
                    {markers[0][2] === 'X' && <Image source={require('../assets/img/cross.png')} style={styles.icon} />}
                    {markers[0][2] === 'O' && <Image source={require('../assets/img/zero.png')} style={styles.icon} />}
                </Pressable>

                {/* Mid Left Cell */}
                <Pressable style={styles.cell_mid_left} onPress={() => markPosition(1,0)}>
                    {markers[1][0] === 'X' && <Image source={require('../assets/img/cross.png')} style={styles.icon} />}
                    {markers[1][0] === 'O' && <Image source={require('../assets/img/zero.png')} style={styles.icon} />}
                </Pressable>

                {/* Mid Mid Cell */}
                <Pressable style={styles.cell_mid_mid} onPress={() => markPosition(1,1)}>
                    {markers[1][1] === 'X' && <Image source={require('../assets/img/cross.png')} style={styles.icon} />}
                    {markers[1][1] === 'O' && <Image source={require('../assets/img/zero.png')} style={styles.icon} />}
                </Pressable>

                {/* Mid Right Cell */}
                <Pressable style={styles.cell_mid_right} onPress={() => markPosition(1,2)}>
                    {markers[1][2] === 'X' && <Image source={require('../assets/img/cross.png')} style={styles.icon} />}
                    {markers[1][2] === 'O' && <Image source={require('../assets/img/zero.png')} style={styles.icon} />}
                </Pressable>

                {/* Bottom Left Cell */}
                <Pressable style={styles.cell_bottom_left} onPress={() => markPosition(2,0)}>
                    {markers[2][0] === 'X' && <Image source={require('../assets/img/cross.png')} style={styles.icon} />}
                    {markers[2][0] === 'O' && <Image source={require('../assets/img/zero.png')} style={styles.icon} />}
                </Pressable>

                {/* Bottom Mid Cell */}
                <Pressable style={styles.cell_bottom_mid} onPress={() => markPosition(2,1)}>
                    {markers[2][1] === 'X' && <Image source={require('../assets/img/cross.png')} style={styles.icon} />}
                    {markers[2][1] === 'O' && <Image source={require('../assets/img/zero.png')} style={styles.icon} />}
                </Pressable>

                {/* Bottom Right Cell */}
                <Pressable style={styles.cell_bottom_right} onPress={() => markPosition(2,2)}>
                    {markers[2][2] === 'X' && <Image source={require('../assets/img/cross.png')} style={styles.icon} />}
                    {markers[2][2] === 'O' && <Image source={require('../assets/img/zero.png')} style={styles.icon} />}
                </Pressable>
            </View>
            <Pressable style={styles.cancleBTN} onPress={resetMarkers}>
                <Image source={require('../assets/img/replay.png')} style={styles.cancelIcon} />
            </Pressable>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff'
    },
    playerInfo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        paddingVertical: 20,
        marginTop: 30
    },
    playerTxt: {
        fontSize: 20,
        fontWeight: '700',
        letterSpacing: 1.2,
        color: '#fff'
    },
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: 60
    },
    cell_top_left: {
        width: windowWidth / 3.2,
        height: windowWidth / 3.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 6,
        borderBottomWidth: 6
    },
    cell_top_mid: {
        width: windowWidth / 3.2,
        height: windowWidth / 3.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 6
    },
    cell_top_right: {
        width: windowWidth / 3.2,
        height: windowWidth / 3.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 6,
        borderLeftWidth: 6,
    },
    cell_mid_left: {
        width: windowWidth / 3.2,
        height: windowWidth / 3.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 6,
    },
    cell_mid_mid: {
        width: windowWidth / 3.2,
        height: windowWidth / 3.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cell_mid_right: {
        width: windowWidth / 3.2,
        height: windowWidth / 3.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 6,
    },
    cell_bottom_left: {
        width: windowWidth / 3.2,
        height: windowWidth / 3.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 6,
        borderTopWidth: 6,
    },
    cell_bottom_mid: {
        width: windowWidth / 3.2,
        height: windowWidth / 3.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 6,
    },
    cell_bottom_right: {
        width: windowWidth / 3.2,
        height: windowWidth / 3.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 6,
        borderTopWidth: 6,
    },
    icon: {
        height: 62,
        width: 62
    },
    cancleBTN: {
        position: 'absolute',
        bottom: 20,
        right: 20
    },
    cancelIcon: {
        height: 80,
        width: 80
    }
})

export default Level;
