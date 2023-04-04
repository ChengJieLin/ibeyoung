package com.ibeyoung.ibeyoung.h2h.dao.mapper;


import com.ibeyoung.ibeyoung.h2h.dao.pojo.SysParamDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface SysParamMapper {

    @Select("select * from sys_param")
    public List<SysParamDto> selectAll();

}
