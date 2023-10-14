function start1 () {
    setInstrument('violin');
    _1();
    _1();
    _2();
    _2();
    _3();
    _3();
    _4();
    _4();
}
function start2 () {
    setInstrument('chorus');
    rest(1);
    rest(1);
    start1();
    start1();
}
function start3 () {
    setInstrument('piano');
    rest(1);
    rest(1);
    rest(1);
    rest(1);
    start1();
    start1();
}
function start4(){
    setInstrument('banjo');
    rest(1);
    rest(1);
    rest(1);
    rest(1);
    rest(1);
    rest(1);
    start1();
    start1();
}
function _1(){
    play(0.25,7);
    play(0.25,8);
    play(0.25,9);
    play(0.25,7);
}
function _2() {
    play(0.25,9);
    play(0.25,10);
    play(0.5,11)
}
function _3() {
    play(0.125, 11);
      play(0.125, 12);
        play(0.125, 11);
          play(0.125, 10);
            play(0.25, 9);
              play(0.25, 7);
}
function _4() {
    play(0.25,7);
    play(0.25,4);
    play(0.5,7);
}
