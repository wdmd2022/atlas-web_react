// some helper functions because we like to be kind

function getFullYear() {
    return new Date().getFullYear().toString();
}

function getFooterCopy(isIndex) {
    if (isIndex) {
        return "Holberton School";
    } else {
        return "Holberton School main dashboard";
    }
}

export { getFullYear, getFooterCopy };
