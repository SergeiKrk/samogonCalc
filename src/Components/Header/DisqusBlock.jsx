import React from 'react'
import {Container} from "react-bootstrap"
import { DiscussionEmbed } from 'disqus-react'

const DisqusBlock = () => {
    return (
        <>
            <Container>
                <DiscussionEmbed
                    shortname='SamagonCalc'
                    config={
                        {
                            url: "http://localhost:3000",
                            identifier: 0,
                            title: "Комментарии:",
                            language: 'ru_ru'
                        }
                    }
                />

            </Container>
        </>
    )
}

export default DisqusBlock;