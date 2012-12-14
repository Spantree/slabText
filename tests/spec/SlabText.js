describe("SlabText", function() {

   beforeEach(function() {
      setFixtures('<div id="slabbedDiv">Message to slab!</div></body>');
      $('#slabbedDiv').slabText({fontRatio: 0.82});
   });

   it("should set body class name to slabtexted", function(){
      expect($('body')).toHaveClass('slabtexted');
   });

   it("should wrap each line in a span with class slabtext", function(){
      expect($('#slabbedDiv')).toContain('span.slabtext');

   });
   

   describe("viewportBreakpoint is larger  than window width", function(){
      it("should set class to slabtextinactive", function(){
         var viewportBreakpoint = $(window).width() + 1;
         $('#slabbedDiv').slabText({fontRatio: 0.82,
                                   viewportBreakpoint: viewportBreakpoint});
         expect($('#slabbedDiv')).toHaveClass('slabtextinactive');
      });
   });

   describe("message has an ampersand", function(){
      beforeEach(function(){
         setFixtures('<div id="messageWithAmpersand">Message with a & </div>');
      });
      it("should wrap ampersand in span with amp class", function(){
         $('#messageWithAmpersand').slabText({fontRation: 0.82});
         expect($('#messageWithAmpersand')).toContain('span.amp');
      });
   });

});
