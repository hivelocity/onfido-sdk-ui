import { h } from 'preact'
import theme from '../../Theme/style.css'
import style from './style.css'
import PageTitle from '../../PageTitle'
import Button from '../../Button'
import {trackComponent} from '../../../Tracker'
import {localised} from '../../../locales'
import CreditCard from './assets/CreditCard'
const PoAIntro = ({country, translate, nextStep}) => (
  <div className={theme.fullHeightContainer}>
    <PageTitle title={translate('proof_of_address.intro.title', {
      country: !country || country === 'GBR' ? 'UK' : '',
    })} />
    <div className={style.content}>
      <p className={style.requirements}>{translate('proof_of_address.intro.requirements')}</p>
          <div className={style.requirements}>
              <CreditCard />
          </div>
    </div>
    <div className={theme.thickWrapper}>
      <Button
        variants={["primary", "centered"]}
        onClick={nextStep}
      >
        {translate('proof_of_address.intro.start')}
      </Button>
    </div>
  </div>
)

export default trackComponent(localised(PoAIntro))
