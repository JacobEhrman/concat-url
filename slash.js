module.exports = function concat(strings, ending) {
    let url = '';

    strings.forEach(element => {
        url = url + element + '/';
    });

    if(ending != null) {
        url = url + ending;
    }

    return url;
}