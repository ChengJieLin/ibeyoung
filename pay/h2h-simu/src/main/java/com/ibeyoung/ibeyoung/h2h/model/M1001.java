package com.ibeyoung.ibeyoung.h2h.model;

import lombok.Data;

@Data
public class M1001 {

    /**
     * VARCHAR(8)<br>
     * 企业编号
     */

    private String clientId;
    /**
     * 用户编号
     */
    private String userId;
    /**
     * 流水号
     */
    private String orderNo;

    /**
     * 交易类型
     */
    private String transType;
    /**
     * 出票类型
     */
    private String issueType;

    /**
     * 出票人账号
     */
    private String issueAcct;

    /**
     * 信用等级
     */
    private String cdtRatgs;

    /**
     * 评级机构
     */
    private String cdtRatgAgcy;

    /**
     * 评级到期日
     */
    private String cdtRatgDueDt;

    /**
     * 票据类型
     */
    private String draftType;


    private String draftAmount;
    /**
     * VARCHAR(8)<br>
     * 出票日
     */
    private String isseDate;

    /**
     * VARCHAR(8)<br>
     * 到期日
     */
    private String dueDate;

    /**
     * VARCHAR(12)<br>
     * 不得转让标志
     */
    private String transFlag;

    /**
     * VARCHAR(12)<br>
     * 备注
     */
    private String remark;

    /**
     * VARCHAR(100)<br>
     * 收款人名称
     */
    private String payeeName;

    /**
     * VARCHAR(32)<br>
     * 收款人账号
     */
    private String payeeAccount;

    /**
     * VARCHAR(12)<br>
     * 收款人开户行行号
     */
    private String payeeBankNo;

    /**
     * 承兑人名称
     */
    private String acceptName;
    /**
     * 承兑人账号
     */
    private String acceptAccount;
    /**
     * 承兑人行号
     */
    private String acceptBankNo;

    /**
     * 合同编号
     */
    private String txlCtrctNo;
    /**
     * 发票编号
     */
    private String invcNo;;


    /**
     * ECDS批次号
     */
    private String batchNo;

    /**
     * 费用账号
     */
    private String feeAccount;

    /**
     * 贸易账号
     */
    private String tradeAccout;


    /**
     * 备用字段1
     */
    private String rsv1;
    /**
     * 备用字段2
     */
    private String rsv2;
    /**
     * 备用字段3
     */
    private String rsv3;
    /**
     * 备用字段4
     */
    private String rsv4;

    /**
     * 备用字段5
     */
    private String rsv5;



    /**
     * VARCHAR(18)<br>
     * 收款人社会信用代码
     */
    private String payeeCreditNo;

    /**
     * VARCHAR(9)<br>
     * 收款人账户名称
     */
    private String payeeAcctname;


    /**
     * 交易票据类型
     */
    private String draftBusiType;

    /**
     * 是否可拆分
     */
    private String cdSplit;


    /**
     * 承兑人账户名称
     */
    private String acceptorAcctname;

    /**
     * 承兑人统一社会信用代码
     */
    private String acceptorCreditNo;


    /**
     * 其他处理意见
     */
    private String otherOp;

}
