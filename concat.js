function slash(strings, ending) {
    let url = '';

    if(strings != null && Array.isArray(strings)) {
        strings.forEach(element => {
            url = url + element + '/';
        });
    }

    if(ending != null && (strings == null || Array.isArray(strings))) {
        url = url + ending;
    }

    if(ending != null && (strings != null && Array.isArray(strings) == false)) {
        url = url + strings + '/' + ending;
    }

    if(ending == null && (strings != null && Array.isArray(strings) == false)) {
        url = url + strings;
    }

    return url;
}

exports.slash = slash;