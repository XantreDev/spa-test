import React, {CSSProperties} from 'react'
import styles from './Buttom.module.scss'

type buttonColorType = 'blue' | 'white'

// export interface CSSColorTheme extends CSSProperties {
//     '': string;
// }

type callback = () => void

const Button: React.FC<{children: string, color: buttonColorType, textWidth: string, borderRadius: '0.5rem' | '1rem', onClick: callback}> = ({children, color, textWidth, borderRadius, onClick}) => {
    const colorTheme : CSSProperties = color === 'blue' ? {backgroundColor: '#1390E5', color: '#FFFFFF'} : {color: '#1390E5', backgroundColor: '#FFFFFF'}

    return (
    <button 
        style={{...colorTheme, borderRadius}}
        className={styles.button} 
        type="submit" 
        onClick={event => {
            event.preventDefault()
            onClick()
        }}
    > 
        <div 
            style={{width: textWidth}}
        >{children}</div> 
    </button>
  )
}

export default Button