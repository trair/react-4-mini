import React from 'react'

export default class Route3 extends React.Component {
    render() {
        const words = this.props.match.params.words;
        return (
            <div>
                3 potato, 4 ------- {words}
            </div>
        )
    }
}

// function Route3(props) {
//     const words = props.match.params.words
//     return(
//         <div>
//             3 potato, 4
//         </div>
//     )
// }