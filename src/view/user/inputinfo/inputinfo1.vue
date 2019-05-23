<template>
    <div class="loan-wapper">
        <div class="heading-top">
        <el-row>
        <el-col :span="12">我要借款 <i class="el-icon-arrow-right"></i><router-link to="/user/userloan"> 产品选择</router-link>
         <i class="el-icon-arrow-right"></i> 订单申请</el-col>
        </el-row>
        </div>
        <el-card class="box-card">
            <el-steps :active="active" finish-status="success" simple style="margin-top: 20px">
            <el-step title="信息录入" ></el-step>
            <el-step title="借款申请" ></el-step>
            <el-step title="影像信息" ></el-step>
            <el-step title="提交订单" ></el-step>
            </el-steps>


            <el-form ref="form" :model="form" label-width="245px" :rules="rules" status-icon>
            <!-- 第一页 -->
            <div v-if="firstshow">
                <!-- 企业基本信息栏 -->
                <el-row>
                <el-col :span="12"><h4>企业基本信息栏</h4>
                </el-col>
                </el-row>
                
                <div>
                <el-row>
                <el-col :span="12">
                    <el-form-item label="企业名称" prop="mobile">
                        <el-input v-model="form.enterpriseName" placeholder="填写企业全称"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="统一社会征信号码或营业执照号码">
                        <el-input v-model="form.socialCode" ></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="注册地址">
                        <el-input v-model="form.registeredAddress" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="实际经营地址">
                        <el-input v-model="form.businessAddress" ></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="注册资本">
                        <el-input v-model="form.registeredCapital" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="实缴资本">
                        <el-input v-model="form.paidCapital" ></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="成立开始日期">
                        <el-input v-model="form.startingDate" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="成立有效截止日期">
                        <el-input v-model="form.endingDate" ></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="是否为一般纳税人">
                        <el-input v-model="form.generalTaxpayers" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="法定代表人姓名">
                        <el-input v-model="form.legalName" ></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="法定代表人身份证号码">
                        <el-input v-model="form.idCard" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="法定代表人联系电话">
                        <el-input v-model="form.phone" ></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="实际控制人姓名">
                        <el-input v-model="form.controlName" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="实际控制人身份证号码">
                        <el-input v-model="form.idCard" ></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="实际控制人联系电话">
                        <el-input v-model="form.phone" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="业务对接人姓名">
                        <el-input v-model="form.businessName" ></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="业务对接人联系电话">
                        <el-input v-model="form.phone" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="业务对接人联系邮箱">
                        <el-input v-model="form.mail" ></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="财务对接人姓名">
                        <el-input v-model="form.financeName" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="财务对接人联系电话">
                        <el-input v-model="form.phone" ></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="财务对接人联系邮箱">
                        <el-input v-model="form.mail" ></el-input>
                    </el-form-item>
                </el-col>
                </el-row>
                </div>

                <!-- 银行卡信息 -->
                <el-row>
                <el-col :span="12"><h4>银行卡信息</h4>
                </el-col>
                </el-row>

                <div>
                <el-row>
                <el-col :span="12">
                    <el-form-item label="银行卡卡号">
                        <el-input v-model="form.cardNo" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="银行名称">
                        <el-input v-model="form.bankName" ></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="账户户名">
                        <el-input v-model="form.accountName" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="银行支行名称">
                        <el-input v-model="form.bankBranchName" ></el-input>
                    </el-form-item>
                </el-col>
                </el-row>
                </div>

                <!-- 企业财务信息栏 -->
                <div>
                <el-row>
                <el-col :span="12"><h4>企业财务信息栏</h4>
                </el-col>
                </el-row>

                <div>
                <el-row>
                <el-col :span="12">
                    <el-form-item label="近三年经营收入金额">
                        <el-input v-model="form.threeYearIncome"  placeholder="按年度填写"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="近三年的利润金额">
                        <el-input v-model="form.threeYearProfit"  placeholder="按年度填写"></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="近三年的开票金额">
                        <el-input v-model="form.threeYearInvoice"  placeholder="按年度填写"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="近三年的纳税金额">
                        <el-input v-model="form.threeYearTaxes"  placeholder="按年度填写"></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="当前金融机构借贷余额">
                        <el-input v-model="form.financialLendingBalance" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="当前非金融机构融资余额">
                        <el-input v-model="form.unfinancialLendingBalance" ></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="对外担保情况">
                        <el-input v-model="form.externalGuarantees" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="担保人">
                        <el-input v-model="form.enterpriseName" ></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="担保金额">
                        <el-input v-model="form.enterpriseName" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="担保期限">
                        <el-input v-model="form.enterpriseName" ></el-input>
                    </el-form-item>
                </el-col>
                </el-row>
                </div>
                </div>
                
            <!-- 按钮 -->
            <div class="in-button">
            <el-button type="primary" style="margin-top: 12px;" @click="next">下一步</el-button></div>
            </div>


            <!-- 第二页 -->
            <div v-if="secondshow">
                <el-row>
                <el-col :span="12"><h4>人力薪资贷申请</h4>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="付款主体名称">
                        <el-input v-model="form.paymentSubject"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="开始合作期限">
                        <el-input v-model="form.periodCooperation" ></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="过去两年交易额">
                        <el-input v-model="form.turnover" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="付款账期">
                        <el-input v-model="form.paymentPeriod" ></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="项目当前应收款总额">
                        <el-input v-model="form.totalReceivables" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="项目员工总数">
                        <el-input v-model="form.projectEmployees" ></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="平均员工薪资">
                        <el-input v-model="form.averageEmployeeSalary" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="单个员工薪资上限">
                        <el-input v-model="form.capEmployeeSalary" ></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="本次申请借款总额">
                        <el-input v-model="form.totalApplication" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="本次申请借款最长期限">
                        <el-input v-model="form.applicationDeadline" ></el-input>
                    </el-form-item>
                </el-col>
                </el-row>
                <el-row>

                <el-col :span="12">
                    <el-form-item label="本次借款指定回款及还款账户">
                        <el-input v-model="form.repaymentAccount" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="本次借款质押的应收款金额">
                        <el-input v-model="form.pledgedReceivables" ></el-input>
                    </el-form-item>
                </el-col>
                </el-row>
                <el-row>

                <el-col :span="12">
                    <el-form-item label="本次借款担保方式">
                        <el-input v-model="form.borrowingGuarantee" ></el-input>
                    </el-form-item>
                </el-col>
                </el-row>
                
            <!-- 按钮 -->
            <div class="in-button">
                <el-button type="primary" style="margin-top: 12px;" @click="last">上一步</el-button>
                <el-button type="primary" style="margin-top: 12px;" @click="next">下一步</el-button></div>
            </div>

            <!-- 第三页 -->
            <div v-if="thirdshow">  
                <el-row>
                <el-col :span="12"><h4>文件上传</h4>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="前十大合作客户名单及年交易额：">
                        <el-upload
                        accept="application/zip"
                        list-type="picture"
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        :on-success="afterupload"
                        :before-upload="beforeAvatarUpload">
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">请将所需提供文件压缩，上传一份压缩包即可，文件大小为20M以内</div>
                        </el-upload>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="人力服务合同：">
                        <el-upload
                        accept="application/zip"
                        list-type="picture"
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        :on-success="afterupload"
                        :before-upload="beforeAvatarUpload">
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" style="color:red;font-size:12px;"> * 扫描件加盖公章</div>
                        <div slot="tip" class="el-upload__tip">请将所需提供文件压缩，上传一份压缩包即可，文件大小为20M以内</div>
                        </el-upload>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="5份以上劳动合同：">
                        <el-upload
                        accept="application/zip"
                        list-type="picture"
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        :on-success="afterupload"
                        :before-upload="beforeAvatarUpload">
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" style="color:red;font-size:12px;"> * 扫描件加盖公章</div>
                        <div slot="tip" class="el-upload__tip">请将所需提供文件压缩，上传一份压缩包即可，文件大小为20M以内</div>
                        </el-upload>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="近一年的核心企业回款记录：">
                        <el-upload
                        accept="application/zip"
                        list-type="picture"
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        :on-success="afterupload"
                        :before-upload="beforeAvatarUpload">
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" style="color:red;font-size:12px;"> * 银行水单或网银导出数据</div>
                        <div slot="tip" class="el-upload__tip">请将所需提供文件压缩，上传一份压缩包即可，文件大小为20M以内</div>
                        </el-upload>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="本次融资对应的发薪名单、金额：">
                        <el-upload
                        accept="application/zip"
                        list-type="picture"
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        :on-success="afterupload"
                        :before-upload="beforeAvatarUpload">
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">请将所需提供文件压缩，上传一份压缩包即可，文件大小为20M以内</div>
                        </el-upload>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="应收款对账凭证：">
                        <el-upload
                        accept="application/zip"
                        list-type="picture"
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        :on-success="afterupload"
                        :before-upload="beforeAvatarUpload">
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" style="color:red;font-size:12px;"> * 原始邮件或对账单盖章</div>
                        <div slot="tip" class="el-upload__tip">请将所需提供文件压缩，上传一份压缩包即可，文件大小为20M以内</div>
                        </el-upload>
                    </el-form-item>
                </el-col>
                </el-row>
                
            <!-- 按钮 -->
            <div class="in-button">
                <el-button type="primary" style="margin-top: 12px;" @click="last">上一步</el-button>
                <el-button type="primary" style="margin-top: 12px;" @click="next">下一步</el-button>
                </div>
            </div>

            <!-- 第四页 -->
            <div v-if="fourshow">
                <!-- 企业基本信息栏 -->
                <el-row>
                <el-col :span="12"><h4>企业基本信息栏</h4>
                </el-col>
                </el-row>
                
                <div>
                <el-row>
                <el-col :span="12">
                    <el-form-item label="企业名称：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="统一社会征信号码或营业执照号码：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="注册地址：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="实际经营地址：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="注册资本：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="实缴资本：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="成立起止日：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="是否为一般纳税人：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="法定代表人姓名：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="法定代表人身份证号码：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="法定代表人联系电话：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="实际控制人姓名：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="实际控制人身份证号码：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="实际控制人联系电话：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="业务对接人姓名：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="业务对接人联系电话：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="业务对接人联系邮箱：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="财务对接人姓名：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="财务对接人联系电话：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="财务对接人联系邮箱：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                </el-row>
                </div>

                <!-- 银行卡信息 -->
                <el-row>
                <el-col :span="12"><h4>银行卡信息</h4>
                </el-col>
                </el-row>

                <div>
                <el-row>
                <el-col :span="12">
                    <el-form-item label="银行卡卡号：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="银行名称：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="账户户名：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="银行支行名称：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                </el-row>
                </div>

                <!-- 企业财务信息栏 -->
                <div>
                <el-row>
                <el-col :span="12"><h4>企业财务信息栏</h4>
                </el-col>
                </el-row>

                <div>
                <el-row>
                <el-col :span="12">
                    <el-form-item label="近三年经营收入金额：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="近三年的利润金额：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="近三年的开票金额：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="近三年的纳税金额：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="当前金融机构借贷余额：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="当前非金融机构融资余额：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="对外担保情况：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="担保人：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="担保金额：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="担保期限：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                </el-row>
                </div>
                </div>

                <el-row>
                <el-col :span="12"><h4>人力薪资贷申请</h4>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="付款主体名称：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="开始合作期限：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="过去两年交易额：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="付款账期：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="项目当前应收款总额：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="项目员工总数：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="平均员工薪资：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="单个员工薪资上限：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="本次申请借款总额：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="本次申请借款最长期限：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                </el-row>
                <el-row>

                <el-col :span="12">
                    <el-form-item label="本次借款指定回款及还款账户：">
                        
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="本次借款质押的应收款金额：">
                        
                    </el-form-item>
                </el-col>
                </el-row>
                <el-row>

                <el-col :span="12">
                    <el-form-item label="本次借款担保方式：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12"><h4>影像信息</h4>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="前十大合作客户名单及年交易额：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="人力服务合同：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="5份以上劳动合同：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="近一年的核心企业回款记录：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="本次融资对应的发薪名单、金额：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="应收款对账凭证：">
                        {{form.name}}
                    </el-form-item>
                </el-col>
                </el-row>
                
                
            <!-- 按钮 -->
            <div class="in-button">
                <el-button type="primary" style="margin-top: 12px;" @click="last">上一步</el-button>
                <el-button type="primary" style="margin-top: 12px;" @click="next">提交</el-button>
                </div>
            </div>
            
            
            </el-form>
            
        </el-card>

    </div>
</template>
<script>
export default {
    data(){
        return{
            active: 0,
            firstshow:true,//第一页显示
            secondshow:false,//第二页显示
            thirdshow:false,//第三页显示
            fourshow:false,//第四页显示

            //表单
            form:{
                // 企业基本信息栏
                enterpriseName:"",              //企业名称
                socialCode:"",              //统一社会征信号码或营业执照号码
                registeredAddress:"",               //注册地址
                businessAddress:"",             //实际经营地址
                registeredCapital:"",               //注册资本
                paidCapital:"",             //实缴资本
                startingDate:"",              //成立开始日
                endingDate:"",                  //成立有效截止日期
                generalTaxpayers:"",                //是否为一般纳税人
                legalList:"",               //法人list
                legalName:"",               //法定代表人姓名
                idCard:"",              //身份证号码
                phone:"",               //联系电话
                controlList:"",             //控制人list
                controlName:"",             //实际控制人姓名
                idCard:"",              //身份证号码
                phone:"",               //联系电话
                businessList:"",                //业务对接人list
                businessName:"",                //业务对接人姓名
                phone:"",               //联系电话
                mail:"",                //联系邮箱
                financeList:"",             //财务对接人list
                financeName:"",             //财务对接人姓名
                phone:"",               //联系电话
                mail:"",                //联系邮箱
                cardNo:"",              //银行卡卡号
                bankName:"",                //银行名称
                accountName:"",             //账户户名
                bankBranchName:"",              //银行支行名称

                // 企业财务信息栏
                threeYearIncome:"",             //近三年经营收入金额
                threeYearProfit:"",             //近三年的利润金额
                threeYearInvoice:"",                //近三年的开票金额
                threeYearTaxes:"",              //近三年的纳税金额  
                financialLendingBalance:"",             //当前金融机构借贷余额
                unfinancialLendingBalance:"",               //当前非金融机构融资余额
                cooperativeClients:"",              //前十大合作客户名单及年交易额
                externalGuarantees:"",              //对外担保情况

                // 人力薪资贷申请
                manpowerServiceContract:"",             //人力服务合同
                laborContract:"",               //5份以上劳动合同
                paymentSubject:"",              //付款主体名称
                periodCooperation:"",               //开始合作期限
                turnover:"",                //过去两年交易额
                paymentPeriod:"",               //付款账期
                returnRecords:"",               //近一年的核心企业回款记录
                totalReceivables:"",                //项目当前应收款总额
                projectEmployees:"",                //项目员工总数
                averageEmployeeSalary:"",               //平均员工薪资
                capEmployeeSalary:"",               //单个员工薪资上限
                paymentList:"",             //本次融资对应的发薪名单、金额
                receivables:"",             //应收款对账凭证
                totalApplication:"",                //本次申请借款总额
                applicationDeadline:"",             //本次申请借款最长期限
                repaymentAccount:"",                //本次借款指定回款及还款账户
                pledgedReceivables:"",              //本次借款质押的应收款金额
                borrowingGuarantee:"",              //本次借款担保方式

            },

        }
    },
    components:{
    },
    methods: {
        next() {
        if (this.active++ > 3) 
        this.active = 0;

        //跳转返回顶部
        if(document.body.scrollTop > 0) {
                window.scrollTo(0, -1);
                document.body.scrollTop = 0;
            }
            window.scrollTo(0, -1);
            document.body.scrollTop = 0;

            //第一页
        if(this.active==0){
            this.firstshow=true;
            this.secondshow=false;
            this.thirdshow=false;
            this.fourshow=false;
        }
            //第二页
        else if(this.active==1){
            this.firstshow=false;
            this.secondshow=true;
            this.thirdshow=false;
            this.fourshow=false;
        }
            //第三页
        else if(this.active==2){
            this.firstshow=false;
            this.secondshow=false;
            this.thirdshow=true;
            this.fourshow=false;
        }
            //第四页
        else if(this.active==3){
            this.firstshow=false;
            this.secondshow=false;
            this.thirdshow=false;
            this.fourshow=true;
        }else if(this.active==4){
            alert("提交成功。")
            this.firstshow=true;
            this.secondshow=false;
            this.thirdshow=false;
            this.fourshow=false;
            this.active = 0;
        }
      },

      //上一步
      last(){
        if (this.active-- < 1) 
        this.active = 0;

        //跳转返回顶部
        if(document.body.scrollTop > 0) {
                window.scrollTo(0, -1);
                document.body.scrollTop = 0;
            }
            window.scrollTo(0, -1);
            document.body.scrollTop = 0;

            //第一页
        if(this.active==0){
            this.firstshow=true;
            this.secondshow=false;
            this.thirdshow=false;
            this.fourshow=false;
        }
            //第二页
        else if(this.active==1){
            this.firstshow=false;
            this.secondshow=true;
            this.thirdshow=false;
            this.fourshow=false;
        }
            //第三页
        else if(this.active==2){
            this.firstshow=false;
            this.secondshow=false;
            this.thirdshow=true;
            this.fourshow=false;
        }
            //第四页
        else if(this.active==3){
            this.firstshow=false;
            this.secondshow=false;
            this.thirdshow=false;
            this.fourshow=true;
        }else if(this.active==4){
            alert("提交成功。")
            this.firstshow=true;
            this.secondshow=false;
            this.thirdshow=false;
            this.fourshow=false;
            this.active = 0;
        }
      },



      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      beforeAvatarUpload(file) {
        const iszip = file.type === 'application/zip';
        const isLt20M = file.size / 1024 / 1024 < 20;

        if (!iszip) {
        this.$message.error('上传文件只能是压缩包(.zip)格式!');
      }
        if (!isLt20M) {
          this.$message.error('上传文件大小不能超过 20MB!');
        }
        return iszip && isLt20M;
      },
      afterupload(res,file,fileList){
          if(res.code===20000){
                this.$message({
                    message: '上传成功！',
                    type: 'success'
                });
            }else {
                this.$message({
                    message: res.msg,
                    type: 'error'
                });
            }
      }
    }
    
}
</script>
<style lang="less" scoped>
.loan-wapper{
    width:100%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.box-card{
    border-top: 3px solid rgba(15, 182, 160, 0.849);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}
.el-col h4{
    padding: 30px 0;
    color: blue;
}
.el-input{
    width: 90%;
}
.in-button{
    text-align: center;
    margin-bottom: 12px;
}
</style>
