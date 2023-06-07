$('#add_user').submit((event) => {
  alert('Data Inserted Successfully!');
});

$('#update_user').submit((event) => {
  event.preventDefault();

  let unindexed_array = $('#update_user').serializeArray();
  let data = {};
  $.map(unindexed_array, (n, i) => {
    data[n['name']] = n['value'];
  });
  // console.log(data);

  let request = {
    url: `http://localhost:3000/api/users/${data.id}`,
    method: 'PUT',
    data: data,
  };

  $.ajax(request).done((response) => {
    alert('Data Updated Successfully!');
  });
});

if (window.location.pathname == '/') {
  $('.table tbody tr td a.delete').click(function () {
    let id = $(this).attr('data-id');
    // console.log(id);
    console.log(id);
    let request = {
      url: `http://localhost:3000/api/users/${id}`,
      method: 'DELETE',
    };

    if (confirm('Do you really want to delete this record')) {
      $.ajax(request).done((response) => {
        alert('Data Deleted Successfully!');
        location.reload();
      });
    }
  });
}
