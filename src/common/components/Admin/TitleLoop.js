import React from 'react'

export default function TitleLoop({ lines, isHeader, id }) {
    // if (lines.length < 1) console.log(lines)

    /**
     * Check if it's a header line
     */

    const line = (isHeader)
        ? Object.keys(lines)
        : Object.values(lines)

    /**
     * Return children according to header status
     */

    return (
        <>
            <tr key={id}>
             {line.map((p, i) => {
                if (isHeader || !i) {
                    return (
                        <th key={i}>
                            {p}
                        </th>
                    )
                } else {
                    return (
                        <td key={i}>
                            {p}
                        </td>
                    )
                }

            })}
            </tr> 
        </>
    )
}
