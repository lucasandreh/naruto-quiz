import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faExclamationCircle } from '@fortawesome/fontawesome-svg-core';

export default function QuestionIcon({color, icon}) {
    return (
            <FontAwesomeIcon style={{color: color, width: "20px"}} icon={icon} />
    )
}