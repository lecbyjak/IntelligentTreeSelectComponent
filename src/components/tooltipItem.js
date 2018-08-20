import React, {Component} from 'react';
import {Tooltip} from 'reactstrap';
import Highlighter from 'react-highlight-words'

class TooltipItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            tooltipOpen: false
        };
    }

    toggle() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen,
        });
    }

    _getTooltipData(){
      const keys = Object.keys(this.props.option);
      return keys.map((key,index) => {
        return (<div key={index}><b>{key}: </b> {this.props.option[key]} </div>)
      });
    }

    render() {
        return (
            <div id={'Tooltip-' + this.props.id} className={"result-item"}>

                <Highlighter
                    highlightClassName='highlighted'
                    searchWords={[this.props.searchString]}
                    autoEscape={false}
                    textToHighlight={this.props.label}
                    highlightTag={"span"}
                />

              {this.props.hoverActive &&
                <Tooltip innerClassName={"VirtualizedTreeSelectTooltip"}
                         style={{left: "400px!important"}}
                         placement={'left'} isOpen={this.state.tooltipOpen}
                         target={'Tooltip-' + this.props.id} autohide={false}
                         toggle={() => this.toggle()} delay={{"show": 300, "hide": 0}}
                         modifiers={{
                             preventOverflow: {
                                 escapeWithReference: false,
                             },
                         }}
                >
                  {this._getTooltipData()}
                </Tooltip>
              }
            </div>
        );
    }
}


export default TooltipItem;
