// some helper functions because we like to be kind

function getFullYear() {
    return new Date().getFullYear();
}

function getFooter(isIndex) {
    if (isIndex) {
        return "Holberton School";
    } else {
        return "Holberton School main dashboard";
    }
}

export { getFullYear, getFooter };
