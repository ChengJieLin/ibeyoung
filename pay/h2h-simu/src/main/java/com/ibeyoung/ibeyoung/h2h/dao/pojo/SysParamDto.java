package com.ibeyoung.ibeyoung.h2h.dao.pojo;


import lombok.Data;

@Data
public class SysParamDto {

    private int id;
    private String param_code;
    private String param_value;
    private String param_name;
    private String switch_flag;
    private String reserve;
}
