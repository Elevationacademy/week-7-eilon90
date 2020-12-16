async function load() {
    const data = await $.get('/data');
    $('#container').empty();
    data.forEach(d => {
        $('#container').append(d.data);
    })
}

load();

$('#button').on('click', async function() {
    const val = $('input').val();
    const data = {data: val}
    await $.post('/data', data);
    await load();
})