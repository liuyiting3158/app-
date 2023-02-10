/**
 * 账单
 */

export type BillType= {
    id: number;//账单id
    userId: number;//用户id
    billType: Array;//账单类型
    billAmount: number;//账单金额
    billDate: Date;//账单日期
    billRemark: string;//账单备注
    billStatus: number;//账单状态



}
