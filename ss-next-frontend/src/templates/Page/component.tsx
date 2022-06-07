import React from "react"
import Head from "next/head"
import PageLayout from "layouts/PageLayout"
import { PageProps } from "types"
import { HTMLElement } from "@silverstripe/nextjs-toolkit"

const Page: React.FC<PageProps> = ({ query: { readOnePage }}) => {
    if (!readOnePage) {
        console.error(`Page query for component at ${__filename} returned null`)
        return null
    }
    return (
        <PageLayout page={readOnePage}>    
        </PageLayout>
    )
}

export default Page