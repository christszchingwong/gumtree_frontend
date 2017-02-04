import React from 'react';

class MyPanelTitle extends React.Component{
  render(){
    return (
      <div className="PanelTitle" onClick={this.props.onCollpase}>
        <div className="padding clearfix">
          <div className="float-left material-icons">insert_drive_file</div>
          <div className="float-left">{this.props.title}</div>
          <span className="float-right">
              {(!!this.props.collapsed?<div className="material-icons">arrow_drop_down</div>:<div className="material-icons">arrow_drop_up</div>)}
          </span>
        </div>
      </div>);
  }
};

class MyPanelBody extends React.Component{
  render(){
    let htmlObj = {
      // sanitize that \u0096 : http://konfiguracja.c0.pl/webpl/index_en.html
      __html : this.props.content.description.replace(/[�]/g,'\u2013')
    }
    let hasThumbnail =  !!this.props.content.thumbnail;
    if (hasThumbnail){
      return (
        <div className="PanelBody">
            <div className="padding">
              <img src={this.props.content.thumbnail} width="150px" height="150px"/>
            </div>
            <div className="padding" dangerouslySetInnerHTML={htmlObj} />
        </div>
      );     
    }
    return (
        <div className="PanelBody">
          <div className="padding" dangerouslySetInnerHTML={htmlObj} />
        </div>
      );     
  }
};


class MyPanelFooter extends React.Component{
  render(){
    return (
      <div className="PanelFooter">
        <div className="padding clearfix">
          <div className="FooterPrev" onClick={this.props.prev}>
            <span className="triangle" />
            <span>{this.props.prevTitle}</span>
          </div>
          <div className="FooterNext" onClick={this.props.next}>
            <span className="triangle" />
            <span>{this.props.nextTitle}</span>
          </div>
        </div>
      </div>);
  }
};

export default class MyContentBox extends React.Component{ 
  constructor(props){
    super(props);
    this.state = {
      currentContentIdx : 0,
      collapsed : false
    };
  };
  nextContent(){
    this.setState((prevState,props)=>{
      let nextIdx = prevState.currentContentIdx + 1;
      if (nextIdx<props.data.content.length){
        return Object.assign(prevState,{currentContentIdx : nextIdx});
      }
      return Object.assign(prevState,{currentContentIdx:0});
    });
  };
  prevContent(){
    this.setState((prevState,props)=>{
      let nextIdx = prevState.currentContentIdx - 1;
      if (nextIdx>=0){
        return Object.assign(prevState,{currentContentIdx : nextIdx});
      }
      let arrayEndIdx = props.data.content.length-1
      if (arrayEndIdx>=0){
        return Object.assign(prevState,{currentContentIdx: arrayEndIdx});
      }
      return Object.assign(prevState,{currentContentIdx:0});
    });
  };
  nextTitle(){
    if (this.state.currentContentIdx+1>=this.props.data.content.length){
      return 'Next';
    }
    return this.props.data.content[this.state.currentContentIdx+1].title;
  };
  prevTitle(){
    if (this.state.currentContentIdx-1>=0){
      return this.props.data.content[this.state.currentContentIdx-1].title;
    }
    return 'Prev';
  };
  toggleCollapse(){
    this.setState((prevState,props)=>{
      return Object.assign(prevState,{collapsed: !prevState.collapsed});
    });
  };
  render(){
    return (<div className="MyPanel">
              <MyPanelTitle title={this.props.data.title} collapsed={this.state.collapsed} onCollpase={this.toggleCollapse.bind(this)}></MyPanelTitle>
              {!!this.state.collapsed?'':<MyPanelBody content={this.props.data.content[this.state.currentContentIdx]} />}
              {!!this.state.collapsed?'':<MyPanelFooter prev={this.prevContent.bind(this)} next={this.nextContent.bind(this)} prevTitle={this.prevTitle()} nextTitle={this.nextTitle()} />}
            </div>);
  }
};