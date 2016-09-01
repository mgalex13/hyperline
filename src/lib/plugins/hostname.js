import os from 'os'
import { iconStyles } from '../utils/icons'

const pluginIcon = (React, fillColor) => (
  <svg style={iconStyles} width="16px" height="16px" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <g fill={fillColor} transform="translate(1.000000, 1.000000)">
        <path d="M2,0 L12,0 L12,8 L2,8 L2,0 Z M4,2 L10,2 L10,6 L4,6 L4,2 Z M5.5,11 L8.5,11 L8.5,14 L5.5,14 L5.5,11 Z M11,11 L14,11 L14,14 L11,14 L11,11 Z M0,11 L3,11 L3,14 L0,14 L0,11 Z M6.5,10 L7.5,10 L7.5,11 L6.5,11 L6.5,10 Z M12,10 L13,10 L13,11 L12,11 L12,10 Z M1,10 L2,10 L2,11 L1,11 L1,10 Z M1,9 L13,9 L13,10 L1,10 L1,9 Z M6.5,8 L7.5,8 L7.5,9 L6.5,9 L6.5,8 Z"></path>
      </g>
    </g>
  </svg>
)

export function hostnameFactory(React) {
  return class extends React.Component {
    static displayName() {
      return 'Hostname plugin'
    }

    static propTypes() {
      return {
        style: React.PropTypes.object
      }
    }

    render() {
      return (
        <div style={this.props.style}>
          {pluginIcon(React, this.props.style.color)} {os.hostname()}
        </div>
      )
    }
  }
}