import * as React from 'react';
import './Form.css';


interface iFormProps {
    now_year: number;
    now_month: number;
    now_day: number;
    self_formState: boolean;
    func_setFormState: Function;
}

interface iFormState {
}

export default class Form extends React.Component <iFormProps, iFormState> {
    constructor(props: any){
        super(props);
        this.setFormState_showForm = this.setFormState_showForm.bind(this);
    }

    setFormState_showForm(is_show: boolean){
        this.props.func_setFormState(is_show);
    }

    switchForm(){
        if(this.props.self_formState){
            return{
                display: "block"
            }
        }else{
            return{
                display: "none"
            }
        }
    }

    render(){
        return(
            <div className="form" style={this.switchForm()}>
                <div className="form-layer" onClick={() => this.setFormState_showForm(false)}></div>
                <div className="form-popup">
                    <p>{this.props.now_year}年{this.props.now_month}月{this.props.now_day}日</p><br />
                    <p>予定を入れてみよう</p>
                    <input type="text" />
                    <input type="button" value="submit" />
                </div>
            </div>
        );
    }
}
