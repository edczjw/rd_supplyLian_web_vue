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


            <el-form ref="form" :model="form" label-width="255px" status-icon>
            <!-- 第一页 -->
            <div v-if="firstshow">
                <!-- 企业基本信息栏 -->
                <el-row>
                <h4>企业基本信息栏</h4>
                </el-row>
                
                <div>
                <el-row>
                <el-col :span="12">
                    <el-form-item label="企业名称：" prop="enterpriseName"  :rules="rules.kong">
                        <el-input v-model.trim.trim="form.enterpriseName" size="mini" clearable placeholder="填写企业全称"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="统一社会征信号码或营业执照号码：" prop="socialCode" :rules="rules.kong">
                        <el-input v-model.trim.trim="form.socialCode" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="注册地址：" prop="registeredAddress" :rules="rules.kong">
                        <el-input v-model.trim="form.registeredAddress" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="实际经营地址：" prop="businessAddress" :rules="rules.kong">
                        <el-input v-model.trim="form.businessAddress" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="注册资本：" prop="registeredCapital" :rules="rules.number">
                        <el-input v-model.trim="form.registeredCapital" placeholder="填写数字值" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="实缴资本：" prop="paidCapital" :rules="rules.number">
                        <el-input v-model.trim="form.paidCapital" placeholder="填写数字值" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="成立开始日期：" prop="startingDate" :rules="rules.kong">
                        <el-input v-model.trim="form.startingDate" placeholder="yyyy-mm-dd" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="成立有效截止日期：" prop="endingDate" :rules="rules.kong">
                        <el-input v-model.trim="form.endingDate" placeholder="yyyy-mm-dd" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="是否为一般纳税人：" prop="generalTaxpayers" :rules="rules.kong">
                        <el-radio v-model.trim="form.generalTaxpayers" label="1">是</el-radio>
                        <el-radio v-model.trim="form.generalTaxpayers" label="2">否</el-radio>
                    </el-form-item>
                </el-col>
                </el-row>

                <div class="kelist">
                <el-button plain type="success" @click="addlaw" size="mini">新增</el-button>
                <el-row>
                <el-col :span="12">
                    <el-form-item 
                    v-for="(lawlist, index) in form.lawlist"
                    :label="'法定代表人姓名'+(index+1)+'：'" 
                    :key="lawlist.key"
                    :prop="'lawlist.' + index + '.legalName'"
                    :rules="rules.kong">
                        <el-input v-model.trim="lawlist.legalName"  size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item 
                    v-for="(lawlist, index) in form.lawlist"
                    :label="'法定代表人身份证号码'+(index+1)+'：'" 
                    :key="lawlist.key"
                    :prop="'lawlist.' + index + '.idCard'"
                    :rules="rules.checkid">
                        <el-input v-model.trim="lawlist.idCard"  size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="13">
                    <el-form-item 
                    v-for="(lawlist, index) in form.lawlist"
                    :label="'法定代表人联系电话'+(index+1)+'：'" 
                    :key="lawlist.key"
                    :prop="'lawlist.' + index + '.phone'"
                    :rules="rules.phone">
                        <el-input v-model.trim="form.phone" placeholder="请输入正确的电话号码"  size="mini" clearable></el-input>
                        <el-button plain type="danger" size="mini" @click.prevent="removelaw(lawlist)">删除</el-button>
                    </el-form-item>
                </el-col>
                </el-row>
                </div>


                <div class="kelist">
                <el-button plain type="success" @click="addcontrol" size="mini">新增</el-button>
                <el-row>
                <el-col :span="12">
                <el-form-item 
                    v-for="(controlList, index) in form.controlList"
                    :label="'实际控制人姓名'+(index+1)+'：'" 
                    :key="controlList.key"
                    :prop="'controlList.' + index + '.controlName'"
                    :rules="rules.kong">
                    <el-input v-model.trim="controlList.controlName"  size="mini" clearable></el-input>
                </el-form-item>
                </el-col>

                <el-col :span="12">
                    <el-form-item 
                    v-for="(controlList, index) in form.controlList"
                    :label="'实际控制人身份证号码'+(index+1)+'：'" 
                    :key="controlList.key"
                    :prop="'controlList.' + index + '.idCard'"
                    :rules="rules.checkid">
                        <el-input v-model.trim="controlList.idCard"  size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="13">
                    <el-form-item 
                    v-for="(controlList, index) in form.controlList"
                    :label="'实际控制人联系电话'+(index+1)+'：'" 
                    :key="controlList.key"
                    :prop="'controlList.' + index + '.phone'"
                    :rules="rules.phone">
                        <el-input v-model.trim="controlList.phone" size="mini" clearable></el-input>
                        <el-button plain type="danger" size="mini" @click.prevent="removelaw(lawlist)">删除</el-button>
                    </el-form-item>
                </el-col>
                </el-row>
                </div>

                <div class="kelist">
                <el-button plain type="success" @click="addbussiness" size="mini">新增</el-button>
                <el-row>
                <el-col :span="12">
                    <el-form-item 
                    v-for="(businessList, index) in form.businessList"
                    :label="'业务对接人姓名'+(index+1)+'：'" 
                    :key="businessList.key"
                    :prop="'businessList.' + index + '.businessName'"
                    :rules="rules.kong">
                        <el-input v-model.trim="businessList.businessName"  size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item 
                    v-for="(businessList, index) in form.businessList"
                    :label="'业务对接人联系电话'+(index+1)+'：'" 
                    :key="businessList.key"
                    :prop="'businessList.' + index + '.phone'"
                    :rules="rules.phone">
                        <el-input v-model.trim="businessList.phone" placeholder="请输入正确的电话号码" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="13">
                    <el-form-item 
                    v-for="(businessList, index) in form.businessList"
                    :label="'业务对接人联系邮箱'+(index+1)+'：'" 
                    :key="businessList.key"
                    :prop="'businessList.' + index + '.mail'"
                    :rules="rules.mail">
                        <el-input v-model.trim="businessList.mail" placeholder="请输入正确的邮箱" size="mini" clearable></el-input>
                        <el-button plain type="danger" size="mini" @click.prevent="removelaw(lawlist)">删除</el-button>
                    </el-form-item>
                </el-col>
                </el-row>
                </div>


                <div class="kelist">
                <el-button plain type="success" @click="addfinance" size="mini">新增</el-button>
                <el-row>
                <el-col :span="12">
                    <el-form-item 
                    v-for="(financeList, index) in form.financeList"
                    :label="'财务对接人姓名'+(index+1)+'：'" 
                    :key="financeList.key"
                    :prop="'financeList.' + index + '.financeName'"
                    :rules="rules.kong">
                        <el-input v-model.trim="financeList.financeName" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item 
                    v-for="(financeList, index) in form.financeList"
                    :label="'财务对接人联系电话'+(index+1)+'：'" 
                    :key="financeList.key"
                    :prop="'financeList.' + index + '.phone'"
                    :rules="rules.phone">
                        <el-input v-model.trim="financeList.phone"  placeholder="请输入正确的电话号码" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="13">
                    <el-form-item
                    v-for="(financeList, index) in form.financeList"
                    :label="'财务对接人联系邮箱'+(index+1)+'：'" 
                    :key="financeList.key"
                    :prop="'financeList.' + index + '.mail'"
                    :rules="rules.mail">
                        <el-input v-model.trim="financeList.mail" placeholder="请输入正确的邮箱" size="mini" clearable></el-input>
                        <el-button plain type="danger" size="mini" @click.prevent="removelaw(lawlist)">删除</el-button>
                    </el-form-item>
                </el-col>
                </el-row>
                </div>
                </div>

                <!-- 银行卡信息 -->
                <el-row>
                <h4>银行卡信息</h4>
                </el-row>

                <div>
                <el-row>
                <el-col :span="12">
                    <el-form-item label="银行卡卡号：" prop="cardNo" :rules="rules.kong">
                        <el-input v-model.trim="form.cardNo"  size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="银行名称：" prop="bankName" :rules="rules.kong">
                        <el-input v-model.trim="form.bankName"  size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="账户户名：" prop="accountName" :rules="rules.kong">
                        <el-input v-model.trim="form.accountName"  size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="银行支行名称：" prop="bankBranchName" :rules="rules.kong">
                        <el-input v-model.trim="form.bankBranchName"  size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                </el-row>
                </div>

                <!-- 企业财务信息栏 -->
                <div>
                <el-row>
                <h4>企业财务信息栏</h4>
                </el-row>

                <div>
                <el-row>
                <el-col :span="12">
                    <el-form-item label="近三年经营收入金额：" prop="threeYearIncome" :rules="rules.number">
                        <el-input v-model.trim="form.threeYearIncome"  placeholder="填写数字值,按年度填写" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="近三年的利润金额：" prop="threeYearProfit" :rules="rules.number">
                        <el-input v-model.trim="form.threeYearProfit"  placeholder="填写数字值,按年度填写" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="近三年的开票金额：" prop="threeYearInvoice" :rules="rules.number">
                        <el-input v-model.trim="form.threeYearInvoice"  placeholder="填写数字值,按年度填写" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="近三年的纳税金额：" prop="threeYearTaxes" :rules="rules.number">
                        <el-input v-model.trim="form.threeYearTaxes"  placeholder="填写数字值,按年度填写" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="当前金融机构借贷余额：" prop="financialLendingBalance" :rules="rules.number">
                        <el-input v-model.trim="form.financialLendingBalance" placeholder="填写数字值" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="当前非金融机构融资余额：" prop="unfinancialLendingBalance" :rules="rules.number">
                        <el-input v-model.trim="form.unfinancialLendingBalance" placeholder="填写数字值"  size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="对外担保情况：" prop="externalGuarantees" :rules="rules.kong">
                        <el-radio-group v-model.trim="form.externalGuarantees" @change="danbaochange">
                        <el-radio label="1">是</el-radio>
                        <el-radio label="2">否</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="担保人：" prop="guarantee" :rules="rules.kong">
                        <el-input v-model.trim="form.enterpriseName"  size="mini" :disabled="danbaoinput" clearable></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="担保金额：" prop="guaranteeAmount" :rules="rules.kong">
                        <el-input v-model.trim="form.enterpriseName" size="mini" :disabled="danbaoinput" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="担保期限：" prop="guaranteePeriod" :rules="rules.kong">
                        <el-input v-model.trim="form.enterpriseName"  size="mini" :disabled="danbaoinput" clearable></el-input>
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
                <h4>人力薪资贷申请</h4>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="付款主体名称：" prop="paymentSubject" :rules="rules.kong">
                        <el-input v-model.trim="form.paymentSubject" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="开始合作期限：" prop="periodCooperation" :rules="rules.number">
                        <el-input v-model.trim="form.periodCooperation" placeholder="填写数字值" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="过去两年交易额：" prop="turnover" :rules="rules.number">
                        <el-input v-model.trim="form.turnover" placeholder="填写数字值" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="付款账期：" prop="paymentPeriod" :rules="rules.number">
                        <el-input v-model.trim="form.paymentPeriod" placeholder="填写数字值" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="项目当前应收款总额：" prop="totalReceivables" :rules="rules.number">
                        <el-input v-model.trim="form.totalReceivables" placeholder="填写数字值" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="项目员工总数：" prop="projectEmployees" :rules="rules.number">
                        <el-input v-model.trim="form.projectEmployees" placeholder="填写数字值" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="平均员工薪资：" prop="averageEmployeeSalary" :rules="rules.number">
                        <el-input v-model.trim="form.averageEmployeeSalary" placeholder="填写数字值" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="单个员工薪资上限：" prop="capEmployeeSalary" :rules="rules.number">
                        <el-input v-model.trim="form.capEmployeeSalary" placeholder="填写数字值" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="本次申请借款总额：" prop="totalApplication" :rules="rules.number">
                        <el-input v-model.trim="form.totalApplication" placeholder="填写数字值" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="本次申请借款最长期限：" prop="applicationDeadline" :rules="rules.number">
                        <el-input v-model.trim="form.applicationDeadline" placeholder="填写数字值" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                </el-row>
                <el-row>

                <el-col :span="12">
                    <el-form-item label="本次借款指定回款及还款账户：" prop="repaymentAccount" :rules="rules.kong">
                        <el-input v-model.trim="form.repaymentAccount"  size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="本次借款质押的应收款金额：" prop="pledgedReceivables" :rules="rules.number">
                        <el-input v-model.trim="form.pledgedReceivables" placeholder="填写数字值" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                </el-row>
                <el-row>

                <el-col :span="12">
                    <el-form-item label="本次借款担保方式：" prop="borrowingGuarantee" :rules="rules.kong">
                        <el-input v-model.trim="form.borrowingGuarantee" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                </el-row>
                
            <!-- 按钮 -->
            <div class="in-button">
                <el-button type="primary" style="margin-top: 12px;" @click="last">上一步</el-button>
                <el-button type="primary" style="margin-top: 12px;" @click="next">下一步</el-button></div>
            </div>

            <!-- 第三页 -->
            <div v-if="thirdshow" >  
                <el-row>
                <h4>文件上传</h4>
                </el-row>
            <div class="thirdpage">
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
                        <el-button size="mini" type="primary">点击上传</el-button>
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
                        <el-button size="mini" type="primary">点击上传</el-button>
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
                        <el-button size="mini" type="primary">点击上传</el-button>
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
                        <el-button size="mini" type="primary">点击上传</el-button>
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
                        <el-button size="mini" type="primary">点击上传</el-button>
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
                        <el-button size="mini" type="primary">点击上传</el-button>
                        <div slot="tip" style="color:red;font-size:12px;"> * 原始邮件或对账单盖章</div>
                        <div slot="tip" class="el-upload__tip">请将所需提供文件压缩，上传一份压缩包即可，文件大小为20M以内</div>
                        </el-upload>
                    </el-form-item>
                </el-col>
                </el-row>
            </div>
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
                <h4>企业基本信息栏</h4>
                </el-row>
                
                <div class="thirdpage">
                <el-row>
                <el-col :span="12">
                    <el-form-item label="企业名称：" >
                        {{form.enterpriseName}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="统一社会征信号码或营业执照号码：">
                        {{form.socialCode}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="注册地址：">
                        {{form.registeredAddress}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="实际经营地址：">
                        {{form.businessAddress}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="注册资本：">
                        {{form.registeredCapital}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="实缴资本：">
                        {{form.paidCapital}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="成立开始日期：">
                        {{form.startingDate}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="成立有效截止日期：">
                        {{form.endingDate}}
                    </el-form-item>
                </el-col>

                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="是否为一般纳税人：">
                        {{form.generalTaxpayers}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="法定代表人姓名：">
                        {{form.legalName}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="法定代表人身份证号码：">
                        {{form.idCard}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="法定代表人联系电话：">
                        {{form.phone}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="实际控制人姓名：">
                        {{form.controlName}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="实际控制人身份证号码：">
                        {{form.idCard}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="实际控制人联系电话：">
                        {{form.phone}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="业务对接人姓名：">
                        {{form.businessName}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="业务对接人联系电话：">
                        {{form.phone}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="业务对接人联系邮箱：">
                        {{form.mail}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="财务对接人姓名：">
                        {{form.financeName}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="财务对接人联系电话：">
                        {{form.phone}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="财务对接人联系邮箱：">
                        {{form.mail}}
                    </el-form-item>
                </el-col>
                </el-row>
                </div>

                <!-- 银行卡信息 -->
                <el-row>
                <h4>银行卡信息</h4>
                </el-row>

                <div class="thirdpage">
                <el-row>
                <el-col :span="12">
                    <el-form-item label="银行卡卡号：">
                        {{form.cardNo}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="银行名称：">
                        {{form.bankName}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="账户户名：">
                        {{form.accountName}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="银行支行名称：">
                        {{form.bankBranchName}}
                    </el-form-item>
                </el-col>
                </el-row>
                </div>

                <!-- 企业财务信息栏 -->
                <el-row >
                <h4>企业财务信息栏</h4>
                </el-row>

                <div class="thirdpage">
                <el-row>
                <el-col :span="12">
                    <el-form-item label="近三年经营收入金额：">
                        {{form.threeYearIncome}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="近三年的利润金额：">
                        {{form.threeYearProfit}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="近三年的开票金额：">
                        {{form.threeYearInvoice}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="近三年的纳税金额：">
                        {{form.threeYearTaxes}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="当前金融机构借贷余额：">
                        {{form.financialLendingBalance}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="当前非金融机构融资余额：">
                        {{form.unfinancialLendingBalance}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="对外担保情况：">
                        {{form.externalGuarantees}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="担保人：">
                        {{form.guarantee}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="担保金额：">
                        {{form.guaranteeAmount}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="担保期限：">
                        {{form.guaranteePeriod}}
                    </el-form-item>
                </el-col>
                </el-row>
                </div>

                <el-row>
                <h4>人力薪资贷申请</h4>
                </el-row>

                <div class="thirdpage">
                <el-row>
                <el-col :span="12">
                    <el-form-item label="付款主体名称：">
                        {{form.paymentSubject}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="开始合作期限：">
                        {{form.periodCooperation}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="过去两年交易额：">
                        {{form.turnover}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="付款账期：">
                        {{form.paymentPeriod}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="项目当前应收款总额：">
                        {{form.totalReceivables}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="项目员工总数：">
                        {{form.projectEmployees}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="平均员工薪资：">
                        {{form.averageEmployeeSalary}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="单个员工薪资上限：">
                        {{form.capEmployeeSalary}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="本次申请借款总额：">
                        {{form.totalApplication}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="本次申请借款最长期限：">
                        {{form.applicationDeadline}}
                    </el-form-item>
                </el-col>
                </el-row>
                <el-row>

                <el-col :span="12">
                    <el-form-item label="本次借款指定回款及还款账户：">
                        {{form.repaymentAccount}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="本次借款质押的应收款金额：">
                        {{form.pledgedReceivables}}
                    </el-form-item>
                </el-col>
                </el-row>
                <el-row>

                <el-col :span="12">
                    <el-form-item label="本次借款担保方式：">
                        {{form.borrowingGuarantee}}
                    </el-form-item>
                </el-col>
                </el-row>
            </div>

                <el-row>
                <h4>影像信息</h4>
                </el-row>

            <div class="thirdpage">
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
            </div>
                
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
import rules from '../../../untils/rules'
export default {
    data(){
        return{
            rules,  
            active: 0,
            firstshow:true,//第一页显示
            secondshow:false,//第二页显示
            thirdshow:false,//第三页显示
            fourshow:false,//第四页显示
            danbaoinput:false,//担保输入框是否禁用

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
                generalTaxpayers:"1",                //是否为一般纳税人

                //法人list
                lawlist:[{             
                    legalName:"",               //法定代表人姓名
                    idCard:"",              //身份证号码
                    phone:"",               //联系电话
                }],
                
                //控制人list
                controlList:[{
                    controlName:"",             //实际控制人姓名
                    idCard:"",              //身份证号码
                    phone:"",               //联系电话
                }],             
                
                //业务对接人list
                businessList:[{
                    businessName:"",                //业务对接人姓名
                    phone:"",               //联系电话
                    mail:"",                //联系邮箱
                }],                
                              
                //财务对接人list
                financeList:[{
                    financeName:"",             //财务对接人姓名
                    phone:"",               //联系电话
                    mail:"",                //联系邮箱
                }],             
                
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
                externalGuarantees:"1",              //对外担保情况

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
        //点击单选担保
        danbaochange(val){
            if(val=='2'){
                this.danbaoinput=true;
            }else{
                this.danbaoinput=false;
            }
        },

        //新增法定代表人
        addlaw(){
            this.form.lawlist.push({
                legalName:"",               //法定代表人姓名
                idCard:"",              //身份证号码
                phone:"",               //联系电话
                key: Date.now()
            });
        },

        //删除法定人
        removelaw(item){
            var index = this.form.lawlist.indexOf(item)
            if (index !== -1) {
            this.form.lawlist.splice(index, 1)
            }
        },


        //新增控制人
        addcontrol(){
            this.form.controlList.push({
                controlName:"",             //实际控制人姓名
                idCard:"",              //身份证号码
                phone:"",               //联系电话
                key: Date.now()
            });
        },

        //删除控制人
        removecontrol(item){
            var index = this.form.controlList.indexOf(item)
            if (index !== -1) {
            this.form.controlList.splice(index, 1)
            }
        },


        //新增业务人
        addbussiness(){
            this.form.businessList.push({
                businessName:"",                //业务对接人姓名
                phone:"",               //联系电话
                mail:"",                //联系邮箱
                key: Date.now()
            });
        },

        //删除业务人
        removebussiness(item){
            var index = this.form.businessList.indexOf(item)
            if (index !== -1) {
            this.form.businessList.splice(index, 1)
            }
        },

        // 新增财务人
        addfinance(){
            this.form.financeList.push({
                financeName:"",             //财务对接人姓名
                phone:"",               //联系电话
                mail:"",                //联系邮箱
                key: Date.now()
            });
        },

        //删除财务人
        removefinance(item){
            var index = this.form.financeList.indexOf(item)
            if (index !== -1) {
            this.form.financeList.splice(index, 1)
            }
        },

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
.box-card h4{
    padding: 30px 0 10px 10px;
    margin-bottom: 30px;
    color: rgb(245, 109, 30);
    border-bottom: 1px solid rgba(40, 144, 214, 0.199);
    }
.el-input{
    width: 90%;
}
.in-button{
    text-align: center;
    margin-bottom: 12px;
}
.thirdpage .el-row{
    border-top: 1px solid rgba(197, 195, 195, 0.637);
    padding: 20px;
}
.thirdpage .el-row .el-col:nth-child(odd){
    border-right: 1px solid rgba(197, 195, 195, 0.637);
}
.kelist{
    margin-top: 30px;
    border-top: 1px dashed rgb(187, 185, 185);
    padding-top: 40px;
}
</style>
