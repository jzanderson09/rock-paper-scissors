(this["webpackJsonprock-paper-scissors"]=this["webpackJsonprock-paper-scissors"]||[]).push([[0],{13:function(e,t,s){},14:function(e,t,s){},16:function(e,t,s){},17:function(e,t,s){"use strict";s.r(t);var c=s(2),r=s.n(c),a=s(4),o=s.n(a),i=(s(13),s(5)),n=s(6),u=s(1),h=s(8),l=s(7),d=s.p+"static/media/rock.778a4ead.jpg",p=s.p+"static/media/paper.d6290310.jpg",m=s.p+"static/media/scissors.97b1d618.jpg",j=(s(14),s(0)),b=function(e){return e.play?Object(j.jsxs)("div",{className:"player",children:[Object(j.jsx)("h3",{children:"Computer!"}),Object(j.jsx)("img",{src:e.choice.src,alt:"computer choice"})]}):Object(j.jsxs)("div",{className:"player",children:[Object(j.jsx)("h3",{children:"Computer!"}),Object(j.jsx)("p",{children:"Loading..."})]})},O=function(e){return Object(j.jsxs)("div",{className:"scoreboard",children:[Object(j.jsxs)("h3",{children:["Current Round: ",e.currentRound]}),Object(j.jsxs)("h3",{children:["Number of Rounds: ",e.maxRounds]}),Object(j.jsxs)("h3",{children:["Computer: ",e.computerScore]}),Object(j.jsxs)("h3",{children:["User: ",e.userScore]})]})},v=function(e){return!e.play&&e.matchOver?Object(j.jsx)("div",{className:"player",children:Object(j.jsx)("h3",{children:"User!"})}):e.play||e.matchOver?Object(j.jsxs)("div",{className:"player",children:[Object(j.jsx)("h3",{children:"User!"}),Object(j.jsx)("img",{src:e.userChoice.src,alt:"user choice"})]}):Object(j.jsxs)("div",{className:"player user",children:[Object(j.jsx)("h3",{children:"User!"}),Object(j.jsx)("input",{className:"choice-btn",onClick:function(){return e.userChoose(0)},type:"submit",value:"Rock"}),Object(j.jsx)("input",{className:"choice-btn",onClick:function(){return e.userChoose(1)},type:"submit",value:"Paper"}),Object(j.jsx)("input",{className:"choice-btn",onClick:function(){return e.userChoose(2)},type:"submit",value:"Scissors"})]})},y=function(e){Object(h.a)(s,e);var t=Object(l.a)(s);function s(e){var c;return Object(i.a)(this,s),(c=t.call(this,e)).state={choices:[{name:"rock",src:d},{name:"paper",src:p},{name:"scissors",src:m}],computerChoice:{},userChoice:{}},c.advanceRound=c.advanceRound.bind(Object(u.a)(c)),c.computerChoose=c.computerChoose.bind(Object(u.a)(c)),c.determineMatchWinner=c.determineMatchWinner.bind(Object(u.a)(c)),c.finishMatch=c.finishMatch.bind(Object(u.a)(c)),c.setStartValues=c.setStartValues.bind(Object(u.a)(c)),c.startNewMatch=c.startNewMatch.bind(Object(u.a)(c)),c.startPlay=c.startPlay.bind(Object(u.a)(c)),c.updateScores=c.updateScores.bind(Object(u.a)(c)),c.userChoose=c.userChoose.bind(Object(u.a)(c)),c}return Object(n.a)(s,[{key:"componentDidMount",value:function(){this.setStartValues()}},{key:"advanceRound",value:function(){this.state.currentRound>=this.state.maxRounds?(this.finishMatch(),this.setStartValues()):this.setState({computerChoice:{},currentRound:this.state.currentRound+1,play:!1,userChoice:{}})}},{key:"computerChoose",value:function(){var e=Math.floor(3*Math.random());return this.state.choices[e]}},{key:"determineMatchWinner",value:function(){var e=this.state.computerScore,t=this.state.userScore;return e>t?"computer":e<t?"user":"tie"}},{key:"finishMatch",value:function(){var e=this.determineMatchWinner();if("tie"===e){var t=this.state.computerScore;window.alert("Both players tie the match with ".concat(t," point(s)! Thank you for playing!"))}else"computer"===e?window.alert("The ".concat(e," won the match with ").concat(this.state.computerScore," point(s)!  Thank you for playing!")):"user"===e&&window.alert("You won the match with ".concat(this.state.userScore," point(s)!  Thank you for playing!"));this.componentDidMount()}},{key:"setStartValues",value:function(){this.setState({computerChoice:{},computerScore:0,currentRound:0,matchOver:!0,maxRounds:0,play:!1,userChoice:{},userScore:0})}},{key:"startNewMatch",value:function(){var e,t;do{null===(t=parseInt(window.prompt("How many rounds would you like to play? --\x3e Must be a number!",1)))&&(t=1)}while(isNaN(t));e=t,this.setState({currentRound:1,matchOver:!1,maxRounds:e})}},{key:"startPlay",value:function(){var e,t,s=this.state.computerChoice.name,c=this.state.userChoice.name,r=(e=s)===(t=c)?"tie":"rock"===e&&"paper"===t?"user":"rock"===e&&"scissors"===t||"paper"===e&&"rock"===t?"computer":"paper"===e&&"scissors"===t||"scissors"===e&&"rock"===t?"user":"scissors"===e&&"paper"===t?"computer":void 0;this.updateScores(r),this.advanceRound()}},{key:"updateScores",value:function(e){"tie"===e?window.alert("It's a tie! Both players picked ".concat(this.state.computerChoice.name,"!")):"computer"===e?(window.alert("The ".concat(e," won the round!")),this.setState({computerScore:this.state.computerScore+1})):(window.alert("You won the round!"),this.setState({userScore:this.state.userScore+1}))}},{key:"userChoose",value:function(e){var t=this,s=this.state.choices[e];if(window.confirm("Are you sure you want to pick ".concat(s.name,"?"))){var c=this.computerChoose();this.setState({userChoice:s,computerChoice:c,play:!0,matchOver:!1}),this.timerHandle=setTimeout((function(){return t.startPlay()}),2e3)}}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timerHandle)}},{key:"render",value:function(){var e=this;return!this.state.play&&this.state.matchOver?Object(j.jsxs)("div",{className:"game",children:[Object(j.jsx)(O,{computerScore:this.state.computerScore,currentRound:this.state.currentRound,maxRounds:this.state.maxRounds,userScore:this.state.userScore}),Object(j.jsx)(b,{play:this.state.play}),Object(j.jsx)(v,{matchOver:this.state.matchOver,play:this.state.play,userChoice:this.state.userChoice}),Object(j.jsx)("div",{className:"button-div",children:Object(j.jsx)("button",{className:"next-match",onClick:function(){return e.startNewMatch()},children:"Play"})})]}):this.state.play||this.state.matchOver?Object(j.jsxs)("div",{className:"game",children:[Object(j.jsx)(O,{computerScore:this.state.computerScore,currentRound:this.state.currentRound,maxRounds:this.state.maxRounds,userScore:this.state.userScore}),Object(j.jsx)(b,{choice:this.state.computerChoice,play:this.state.play}),Object(j.jsx)(v,{matchOver:this.state.matchOver,play:this.state.play,userChoice:this.state.userChoice}),Object(j.jsx)("div",{className:"button-div"})]}):Object(j.jsxs)("div",{className:"game",children:[Object(j.jsx)(O,{computerScore:this.state.computerScore,currentRound:this.state.currentRound,maxRounds:this.state.maxRounds,userScore:this.state.userScore}),Object(j.jsx)(b,{play:this.state.play}),Object(j.jsx)(v,{matchOver:this.state.matchOver,play:this.state.play,userChoice:this.state.userChoice,userChoose:this.userChoose}),Object(j.jsx)("div",{className:"button-div"})]})}}]),s}(c.Component);s(16);var x=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Rock \u221e Paper \u221e Scissors"}),Object(j.jsx)(y,{})]})},S=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,18)).then((function(t){var s=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;s(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),S()}},[[17,1,2]]]);
//# sourceMappingURL=main.fdd878c9.chunk.js.map