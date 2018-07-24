import * as React from 'react';
import './Form.css';


interface iFormProps {
    now_year: number;
    now_month: number;
    now_day: number;
    self_formShow: boolean;
    self_formType: string;
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

    switchFormShow(){
        if(this.props.self_formShow){
            return{
                display: "block"
            }
        }else{
            return{
                display: "none"
            }
        }
    }

    switchFormURL(){
        if(this.props.self_formType === 'create'){
            return ('./create.php?date=' + this.props.now_year + '-' + this.props.now_month + '-' + this.props.now_day);
        }
        if(this.props.self_formType === 'update'){
            return ('./update.php?date=' + this.props.now_year + '-' + this.props.now_month + '-' + this.props.now_day);
        }
    }

    switchFormStatement() {
        if(this.props.self_formType === 'create'){
            return '予定の作成';
        }
        if(this.props.self_formType === 'update'){
            return '予定の更新';
        }
    }

    render(){
        return(
            <div className="form" style={this.switchFormShow()}>
                <div className="form-layer" onClick={() => this.setFormState_showForm(false)}></div>
                <div className="form-popup">
                    <p>{this.props.now_year}年{this.props.now_month}月{this.props.now_day}日</p><br />
                    <p>{this.switchFormStatement()}</p>
                    <form action={this.switchFormURL()} method="post" target="_self">
                        <input type="text" name="create_task" />
                        <input type="submit" value="作成" />
                    </form>
                </div>
            </div>
        );
    }
}
