drop table if exists clientes;

create table clientes (
    id serial primary key,
    nome varchar(255) not null
);

insert into clientes (nome) values ('João');
insert into clientes (nome) values ('Maria');
insert into clientes (nome) values ('José');
insert into clientes (nome) values ('Ana');
insert into clientes (nome) values ('Pedro');
insert into clientes (nome) values ('Paula');
