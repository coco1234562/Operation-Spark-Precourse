describe('Well of HTML', function() {
  const wellOfHTML = $('#well-of-html');

  it('should have a title A Well of HTML', function() {
    const title = wellOfHTML.find('title').text();
    assert.equal(title, 'A Well of HTML');
  });

  it('should have an <h1> tags', function() {
    const h1Tags = wellOfHTML.find('h1').length;
    assert.isAbove(h1Tags, 0);
  });

  it('should have an <h2> tags', function() {
    const h2Tags = wellOfHTML.find('h2').length;
    assert.isAbove(h2Tags, 0);
  });

  it('should have an <h3> tags', function() {
    const h3Tags = wellOfHTML.find('h3').length;
    assert.isAbove(h3Tags, 0);
  });

  it('should have an <h4> tags', function() {
    const h4Tags = wellOfHTML.find('h4').length;
    assert.isAbove(h4Tags, 0);
  });

  it('should have an <h5> tags', function() {
    const h5Tags = wellOfHTML.find('h5').length;
    assert.isAbove(h5Tags, 0);
  });

  it('should have an <h6> tags', function() {
    const h6Tags = wellOfHTML.find('h6').length;
    assert.isAbove(h6Tags, 0);
  });

  it('should have a <p> tag', function() {
    const pTags = wellOfHTML.find('p').length;
    assert.isAbove(pTags, 0);
  });

  it('should have a <b> tag', function() {
    const bTags = wellOfHTML.find('b').length;
    assert.isAbove(bTags, 0);
  });

  it('should have an <i> tag', function() {
    const iTags = wellOfHTML.find('i').length;
    assert.isAbove(iTags, 0);
  });

  it('should have an <em> tag', function() {
    const emTags = wellOfHTML.find('em').length;
    assert.isAbove(emTags, 0);
  });

  it('should have a <strong> tag', function() {
    const strongTags = wellOfHTML.find('strong').length;
    assert.isAbove(strongTags, 0);
  });

  it('should have an <a> tag', function() {
    const aTags = wellOfHTML.find('a').length;
    assert.isAbove(aTags, 0);
  });

  it('should have an <img> tag', function() {
    const imgTags = wellOfHTML.find('img').length;
    assert.isAbove(imgTags, 0);
  });

  it('should have a <ul> tag', function() {
    const ulTags = wellOfHTML.find('ul').length;
    assert.isAbove(ulTags, 0);
  });

  it('should have an <ol> tag', function() {
    const olTags = wellOfHTML.find('ol').length;
    assert.isAbove(olTags, 0);
  });

  it('should have an <li> tag', function() {
    const liTags = wellOfHTML.find('li').length;
    assert.isAbove(liTags, 0);
  });

  it('should have a <dl> tag', function() {
    const dlTags = wellOfHTML.find('dl').length;
    assert.isAbove(dlTags, 0);
  });

  it('should have a <dt> tag', function() {
    const dtTags = wellOfHTML.find('dt').length;
    assert.isAbove(dtTags, 0);
  });

  it('should have a <dd> tag', function() {
    const ddTags = wellOfHTML.find('dd').length;
    assert.isAbove(ddTags, 0);
  });

  it('should have at least two <div> tags', function() {
    const divTags = wellOfHTML.find('div').length;
    assert.isAbove(divTags, 1);
  });

  it('should have a <table> tag', function() {
    const tableTags = wellOfHTML.find('table').length;
    assert.isAbove(tableTags, 0);
  });

  it('should have a <thead> tag', function() {
    const theadTags = wellOfHTML.find('thead').length;
    assert.isAbove(theadTags, 0);
  });

  it('should have a <tbody> tag', function() {
    const tbodyTags = wellOfHTML.find('tbody').length;
    assert.isAbove(tbodyTags, 0);
  });

  it('should have a <tfoot> tag', function() {
    const tfootTags = wellOfHTML.find('tfoot').length;
    assert.isAbove(tfootTags, 0);
  });

  it('should have at least three <tr> tags', function() {
    const trTags = wellOfHTML.find('tr').length;
    assert.isAbove(trTags, 2);
  });

  it('should have a <th> tag', function() {
    const thTags = wellOfHTML.find('th').length;
    assert.isAbove(thTags, 0);
  });

  it('should have at least three <td> tags', function() {
    const tdTags = wellOfHTML.find('td').length;
    assert.isAbove(tdTags, 2);
  });

  it('should have a <form> tag', function() {
    const formTags = wellOfHTML.find('form').length;
    assert.isAbove(formTags, 0);
  });

  it('should have a <label> tag', function() {
    const labelTags = wellOfHTML.find('label').length;
    assert.isAbove(labelTags, 0);
  });

  it('should have an <input> tag', function() {
    const inputTags = wellOfHTML.find('input').length;
    assert.isAbove(inputTags, 0);
  });

  it('should have a <textarea> tag', function() {
    const textareaTags = wellOfHTML.find('textarea').length;
    assert.isAbove(textareaTags, 0);
  });

  it('should have a <button> tag', function() {
    const buttonTags = wellOfHTML.find('button').length;
    assert.isAbove(buttonTags, 0);
  });


});
