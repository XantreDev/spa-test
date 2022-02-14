import React, {CSSProperties} from 'react'
import styles from './Buttom.module.scss'

type buttonColorType = 'blue' | 'white'

// export interface CSSColorTheme extends CSSProperties {
//     '': string;
// }

const Button: React.FC<{children: string, color: buttonColorType, textWidth: string, borderRadius: '0.5rem' | '1rem'}> = ({children, color, textWidth, borderRadius}) => {
    const colorTheme : CSSProperties = color === 'blue' ? {backgroundColor: '#1390E5', color: '#FFFFFF'} : {color: '#1390E5', backgroundColor: '#FFFFFF'}

    return (
    <button 
        style={{...colorTheme, borderRadius}}
        className={styles.button} 
        type="submit" 
        onClick={event => event.preventDefault()}
    > 
        <div 
            style={{width: textWidth}}
        >{children}</div> 
    </button>
  )
}

export default Button