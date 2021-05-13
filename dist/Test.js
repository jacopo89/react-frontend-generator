import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useSetResourceModel } from "./resource-models/modelsRegistry";
import { createServer } from "miragejs";
import { properties } from "./mock/properties";
import { listings } from "./mock/listings";
import { model } from "./mock/model";
import { overrideRegistry } from "./mock/overrideRegistry";
import { RouteFilterList } from "./generators/pages/ListPageGenerator";
import { landlords } from "./mock/landlords";
export default function Test() {
    createServer({
        routes() {
            this.get("http://localhost:1000/api/properties", () => properties);
            this.get("http://localhost:1000/api/landlords", () => landlords);
            this.post("http://localhost:1000/api/resources/listings", () => listings);
            this.get("http://localhost:1000/resources", () => model);
        },
    });
    const modelLoaded = useSetResourceModel(overrideRegistry, "http://localhost:1000/resources");
    const [resourceName, setResourceName] = useState(true);
    const render = _jsxs("div", { children: [_jsx("button", Object.assign({ onClick: () => setResourceName(!resourceName) }, { children: "SWITCHA" }), void 0),
            _jsx(RouteFilterList, { resourceName: resourceName ? "landlords" : "properties", filters: {} }, void 0)] }, void 0);
    return modelLoaded ? render : _jsx("div", {}, void 0);
}