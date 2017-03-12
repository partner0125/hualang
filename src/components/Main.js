require('normalize.css/normalize.css');
require('../styles/App.scss');

import React from 'react';

//获取图片相关的数据
let imageDatas = require('../data/imageDatas.json');

// let yeomanImage = require('../images/yeoman.png');
//利用自执行函数，将图片信息转换成图片URL路径信息
imageDatas = (function genImageURL(imageDatasArr) {
  for (var i = 0, j = imageDatasArr.length; i < j; i++) {
    let singleImageData = imageDatasArr[i];
    
    singleImageData.imageURL = require('../images/' + singleImageData.fileName);
    
    imageDatasArr[i] = singleImageData;
  }
  return imageDatasArr;
})(imageDatas);
// imageDatas = genImageURL(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">
        </section>
        <nav className="controller-nav">
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
