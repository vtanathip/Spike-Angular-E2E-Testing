'use strict';

describe('UI: Main Page', function () {

  // always redirect to main page
  beforeEach(function() {
    browser().navigateTo('/');
  });

  it('should have 3 paragraphs', function(){
    expect(element('.marketing p').count()).toEqual(3);
  });

  it('should have yeoman images in class lead', function(){
    expect(element('.lead > img').attr('src')).toEqual('images/yeoman.png');
  });

  it('should display form data correctly when submit data',function(){
     //given
     input('form.username').enter('jacksparrow');
     input('form.password').enter('black pearl');
     //when
     element('.form-testing input[type="button"]').click();
     //then
     expect(element('.form-testing h3').text())
      .toEqual('Form Result: username: jacksparrow, password is: black pearl');
  });

});
