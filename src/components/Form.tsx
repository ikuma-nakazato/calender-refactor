import * as React from 'react';
import './Form.css';


interface iFormProps {
    form_judge: boolean;
}

interface iFormState {

}

export default class Form extends React.Component <iFormProps, iFormState> {
    constructor(props: any){
        super(props);
    }

    displayForm() {
        //form_judgeで表示と非表示を変更
        if(this.props.form_judge){
            console.log('true');
        }
    }

    render(){
        this.displayForm();
        return(
            <div>
                <div></div>
                <div>
                    <p>Y年M月J日</p><br />
                    <p>予定を更新</p><br />
                    <input type="text" />
                    <input type="button" value="submit" />
                </div>
            </div>
        );
    }
}
