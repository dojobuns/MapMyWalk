export const fetchWalks = () => (
    $.ajax({
        method: 'GET',
        url: 'api/walks',
    })
);

export const fetchWalk = id => (
    $.ajax({
        method: 'GET',
        url: `api/walks/${id}`,
    })
);

export const createWalk = walkForm => (
    $.ajax({
        method: 'POST',
        url: 'api/walks',
        data: walkForm,
    })
);

