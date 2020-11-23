# Template for a new Azure Functions Typescript

## Getting Started

**git clone**

```bash
git clone https://github.com/coc-buml/azure-functions-typescript-template.git <new-service-name>
cd <new-service-name> && rm -rf .git
```

**use http trigger**

1. rename folder `endpoint-name/`
2. rename `"scriptFile": "../dist/endpoint-name/index.js"` in `endpoint-name/function.json`

**use new trigger**

1. run `rm -rf endpoint-name`

2. run `func-new`
