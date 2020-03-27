import { h, Component } from 'preact';

import { trackComponent } from '../../Tracker';
import PageTitle from '../PageTitle';
import theme from '../Theme/style.css';
import style from './style.css';
import { localised } from '../../locales';
import Button from '../Button';
import { isDesktop } from '~utils/index'
class Complete extends Component {
    componentDidMount() {
        this.props.nextStep();
    }

    render({ message, submessage, translate }) {
        const completeMessage = message || translate('complete.message');
        const completeSubmessage = submessage || translate('complete.submessage');
        return (
            <div className={style.wrapper}>
                <span className={`${theme.icon}  ${style.icon}`} />
                <PageTitle title={completeMessage} subTitle={completeSubmessage} />

                {isDesktop && <Button
                    className={style.button}
                    onClick={() => window.location.assign('https://my.hivelocity.net')}
                    variants={[ 'centered', 'primary' ]}
                >
                    Go To myVelocity
                </Button>}
            </div>
        );
    }
}

export default trackComponent(localised(Complete));
