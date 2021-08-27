alert('We are going to play a game called Mad Libs')
alert('This game is about building stories with the other players, please complete the questions asked to build the story')
var confirmar=confirm('Are you ready to play?')

if(confirmar){
    /* Player 1 */
        /* Characters */
        var name1p1=prompt('Player 1: Tell me the name of a person you know or a famous one')
        var name2p1=prompt('Player 1: Tell me the name of a person you know or a famous one')


        /* Location */
        var wherep1=prompt('Player 1: Tell me a location')

        /* Action */
        var what1=prompt('Player 1: What did they do?')

        /* Conversation */
        var say1p1=prompt('Player 1: What did the first one say?')
        var say2p1=prompt('Player 1: What did the second one say?')

        /* Ending */
        var endingp1=prompt('Player 1: Tell me an ending for this to characters')

    /* Player 2 */

        /* Characters */
        var name1p2=prompt('Player 2: Tell me the name of a person you know or a famous one')
        var name2p2=prompt('Player 2: Tell me the name of a person you know or a famous one')

        /* Location */
        var wherep2=prompt('Player 2: Tell me a location')

        /* Action */
        var what2=prompt('Player 2: What did they do?')

        /* Conversation */
        var say1p2=prompt('Player 2: What did the first one say?')
        var say2p2=prompt('Player 2: What did the second one say?')

        /* Ending */
        var endingp2=prompt('Player 2: Tell me an ending for this to characters')

    /* Stories */
    document.getElementById('player1').innerHTML+=('<p>'+name1p1+' '+ name2p2+' met each other at '+wherep1+' and they '+what2+' together. '+name1p1+' said: '+say1p1 +' and '+name2p2+' answered '+say2p2+'. And they '+endingp1+'.</p>')

    document.getElementById('player2').innerHTML+=('<p>'+name1p2+' '+ name2p1+' met each other at '+wherep2+' and they '+what1+' together. '+name1p2+' said: '+say1p2 +' and '+name2p1+' answered '+say1p1+'. And they '+endingp2+'.</p>')
}else{
    document.getElementById('stories').style.display='none';
    document.write('<h2>We\'ll play another day!</h2>')
}

