import * as React from 'react';
import SidemenuTask from './SidemenuTask';
import './Sidemenu.css';

interface iSidemenuProps {
    now_year: number;
    now_month: number;
    now_day: number;
}

interface iSidemenuState {

}

export default class Sidemenu extends React.Component <iSidemenuProps, iSidemenuState> {
    constructor(props: any){
        super(props);
    }

    render() {
        return(
            <div className="sidemenu">
                <div className="sidemenu-date">{this.props.now_year}年{this.props.now_month}月{this.props.now_day}日</div>
                <div>
                    <div>予定の一覧</div>
                    <SidemenuTask />
                </div>
            </div>
        );
    }
}

