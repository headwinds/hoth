import React from "react";
import Helmet from "react-helmet";

export default function Application () {
    return (
        <div className="application">
            <Helmet
                htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
                title="headwinds"
                titleTemplate="headwinds.net - %s"
                defaultTitle="headwinds"
                titleAttributes={{itemprop: "name", lang: "en"}}
                base={{target: "_blank", href: "https://headwinds.net/"}}
                meta={[
                    {name: "description", content: "headwinds"},
                    {property: "og:type", content: "article"}
                ]}
                link={[
                    {rel: "canonical", href: "https://headwinds.net/"},
                    {rel: "apple-touch-icon", href: "https://headwinds.net/img/apple-touch-icon-57x57.png"},
                    {rel: "apple-touch-icon", sizes: "72x72", href: "https://headwinds.net/img/apple-touch-icon-72x72.png"}
                ]}
                script={[
                    {src: "http://include.com/pathtojs.js", type: "text/javascript"},
                    {type: "application/ld+json", innerHTML: `{ "@context": "http://schema.org" }`}
                ]}
                noscript={[
                    {innerHTML: `<link rel="stylesheet" type="text/css" href="foo.css" />`}
                ]}
                style={[
                  {type: "text/css", cssText: "body {background-color: blue;} p {font-size: 12px;}"}
                ]}
                onChangeClientState={(newState) => console.log(newState)}
            />
        </div>
    );
};