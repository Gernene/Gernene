$(function() {
  $(".typed").typed( {
    strings: ["a <b>programmer</b>", "a <b>designer</b>", "an <b>artist</b>", "a <b>writer</b>"],
    typeSpeed: 40,
    backDelay: 500,
    loop: true,
    // defaults to false for infinite loop
    loopCount: false,
    callback: function() { foo(); }
  });

  function foo() { console.log("Callback"); }

});
