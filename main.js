const interval = setInterval(() => {
    document.querySelectorAll("iframe").forEach(iframe => {
        var validIframe = iframe.contentWindow.document.querySelector("#rest-integration-selector-scope")
        if (validIframe) {
            let toolbar = validIframe.parentElement.parentElement.querySelector(".integration-tab-title")

            iframe.contentWindow.document.body.querySelector(".ui-tile-selector-select-container").click()
            iframe.contentWindow.document.body.querySelector(".ui-btn-text").click()
            
            toolbar.style.display = "flex"
            toolbar.style.justifyContent = ""
            clearInterval(interval)

            const button = document.createElement("button")
            button.innerHTML = "Selecionar Tudo"
            button.id = "select-all-scope"
            button.style.marginLeft = "4em"
            button.style.height = "3em"
            button.classList.add("ui-btn")
            button.classList.add("ui-btn-primary")

            button.addEventListener("click", (e) => {
                e.preventDefault()
                let items = iframe.contentWindow.document.querySelectorAll(".ui-tile-selector-searcher-content-item")

                for (i of items) {
                    i.click()
                }
            })

            toolbar.appendChild(button)
        }
    })
}, 1000)
