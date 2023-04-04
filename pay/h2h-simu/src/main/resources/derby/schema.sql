CREATE TABLE sys_param (
    id INTEGER primary key autoincrement,
    param_code varchar(20),
    param_value varchar(20),
    param_name varchar(200),
    switch_flag char(1),
    reserve varchar(100)
);
