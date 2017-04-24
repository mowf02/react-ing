import React, { Component } from 'react';
import './app.scss'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        activeIndex: 0,
        headerTitle: ["Header One", "Header Two"],
        buttonText: ["Shop", "Shop More"],
        headerImages: ["./src/assets/keellson.png", "./src/assets/helaine.png"],
        secondaryImages: [["./src/assets/missouri.png", "./src/assets/missouri-side.png"], ["./src/assets/showcourt.png", "./src/assets/showcourt-side.png"]],
        primaryText: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor, ante sit amet viverra lacinia, risus enim vestibulum felis, in ornare arcu tortor ut purus. Donec ac metus consequat, molestie urna finibus, venenatis felis.", "Nam mollis ornare lectus in ornare. Curabitur ut nulla id ligula feugiat finibus quis eget est. Quisque egestas quam vitae cursus facilisis. Mauris pharetra justo sit amet velit placerat, sit amet pharetra nisl porttitor."],
        secondaryText: [ "In eu convallis neque. Etiam in est urna. Sed quis ultricies nisi.", "Vivamus faucibus justo rhoncus convallis tincidunt. Nulla finibus lorem nisi, vel auctor tellus blandit vel."],
        secondaryTitle: ["Subtitle One", "Subtitle Two"],
        thisColour: ["blue", "yellow"]
        }
    }

    handleClick(index) {
        this.setState({activeIndex: index})
    }

    render() {
        return <div>
                <section className="flex-grid">
                    <NavItem name="View Men" index={0} isActive={this.state.activeIndex===0} onClick={this.handleClick.bind(this)} />
                    <NavItem name="View Women" index={1} isActive={this.state.activeIndex===1} onClick={this.handleClick.bind(this)} />
                </section>
                <PageContentTop isActive={this.state.activeIndex===0} primaryText={this.state.primaryText[this.state.activeIndex]} headerImages={this.state.headerImages[this.state.activeIndex]}  headerTitle={this.state.headerTitle[this.state.activeIndex]} buttonText={this.state.buttonText[this.state.activeIndex]} />
                <PageContentBottom isActive={this.state.activeIndex===0} buttonText={this.state.buttonText[this.state.activeIndex]} secondaryText={this.state.secondaryText[this.state.activeIndex]} secondaryImages={this.state.secondaryImages[this.state.activeIndex]} secondaryTitle={this.state.secondaryTitle[this.state.activeIndex]} />
                <Social />
            </div>
        }
    }

    class NavItem extends React.Component {
        handleClick() {
            this.props.onClick(this.props.index)
        }

      render () {
        return<button type='button' className="nav-item col" onClick={this.handleClick.bind(this)}>
                <h2>{this.props.name}</h2>
            </button>
        }
    }

    class PageContentTop extends React.Component {
        render () {
            let imgUrl = this.props.headerImages;
            let styles = {
                root: {
                    backgroundImage: 'url(' + imgUrl + ')'
                },
            };

        return <section className="flex-grid flex-grid-top">
            <section className={this.props.isActive ? 'text-component col blue' : 'text-component col yellow'}>
                <div className="text-component-wrapper">
                    <h1 className={this.props.isActive ? 'header-yellow' : 'header-blue'}>{this.props.headerTitle}</h1>
                    <p>{this.props.primaryText}</p>
                    <button className="Button">{this.props.buttonText}</button>
                </div>
            </section>
            <section className="image-component col" style={styles.root}></section>
        </section>
        }
    }

    class PageContentBottom extends React.Component {
        render () {
            let imgUrl = this.props.secondaryImages[0];
            let styles = {
                root: {
                    backgroundImage: 'url(' + imgUrl + ')'
                },
            };

            let imgUrl1 = this.props.secondaryImages[1];
            let styles1 = {
                root1: {
                    backgroundImage: 'url(' + imgUrl1 + ')'
                },
            };

        return <div className="flex-grid flex-grid-bottom">
            <section className="image-component image-component--contained col" style={styles.root}></section>
            <section className="image-component image-component--contained col" style={styles1.root1}></section>
            <section className={this.props.isActive ? 'text-component col blue' : 'text-component col yellow'}>
                <div className="text-component-wrapper">
                    <h1 className={this.props.isActive ? 'header-yellow' : 'header-blue'}>{this.props.secondaryTitle}</h1>
                    <p>{this.props.secondaryText}</p>
                    <button className={this.props.isActive ? 'Button' : 'Button blue'}>{this.props.buttonText}</button>
                </div>
            </section>
        </div>
        }
    }

    class Social extends React.Component {
        render () {
            return <section className="social-component">
                <img className="social-icon" src="./src/assets/facebook.png"></img>
                <img className="social-icon" src="./src/assets/twitter.png"></img>
                <img className="social-icon" src="./src/assets/pinterest.png"></img>
                <img className="social-icon" src="./src/assets/google.png"></img>
                <button className="Button col blue">Shop</button>
            </section>
        }
    }

export default App;
