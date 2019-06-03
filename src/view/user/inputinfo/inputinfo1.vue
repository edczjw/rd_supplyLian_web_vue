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
                        <el-input v-model.trim="form.enterpriseName" size="mini" clearable placeholder="填写企业全称"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="统一社会征信号码或营业执照号码：" prop="socialCode" :rules="rules.kong">
                        <el-input v-model.trim="form.socialCode" size="mini" clearable></el-input>
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
                    <el-form-item label="注册资本（元）：" prop="registeredCapital" :rules="rules.number">
                        <el-input v-model.trim="form.registeredCapital" placeholder="填写数字值" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="实缴资本（元）：" prop="paidCapital" :rules="rules.number">
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
                        <el-input v-model.trim="form.endingDate" placeholder="yyyy-mm-dd或者长期" size="mini" clearable></el-input>
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

                <el-row>
                <el-col :span="12">
                    <el-form-item label="法定代表人姓名" prop="legalName" :rules="rules.kong">
                        <el-input v-model.trim="form.legalName" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="法定代表人身份证号码" prop="legalIdCard" :rules="rules.checkid">
                        <el-input v-model.trim="form.legalIdCard"  size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="法定代表人联系电话" prop="legalPhone" :rules="rules.phone">
                        <el-input v-model.trim="form.legalPhone" placeholder="请输入正确的电话号码"  size="mini" clearable></el-input>
                        </el-form-item>
                </el-col>
                </el-row>


                <div class="kelist">
                <el-button  v-if="addshow1" plain type="success" @click="addcontrol" size="mini">新增</el-button>
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
                <el-col :span="12">
                    <el-form-item 
                    v-for="(controlList, index) in form.controlList"
                    :label="'实际控制人联系电话'+(index+1)+'：'" 
                    :key="controlList.key"
                    :prop="'controlList.' + index + '.phone'"
                    :rules="rules.phone">
                        <el-input v-model.trim="controlList.phone" size="mini" clearable></el-input>
                        <el-button v-if="deleteshow1" plain type="danger" size="mini" @click.prevent="removecontrol(controlList)">删除</el-button>
                    </el-form-item>
                </el-col>
                </el-row>
                </div>

                <div class="kelist">
                <el-button v-if="addshow2" plain type="success" @click="addbussiness" size="mini">新增</el-button>
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
                <el-col :span="12">
                    <el-form-item 
                    v-for="(businessList, index) in form.businessList"
                    :label="'业务对接人联系邮箱'+(index+1)+'：'" 
                    :key="businessList.key"
                    :prop="'businessList.' + index + '.mail'"
                    :rules="rules.mail">
                        <el-input v-model.trim="businessList.mail" placeholder="请输入正确的邮箱" size="mini" clearable></el-input>
                        <el-button v-if="deleteshow2" plain type="danger" size="mini" @click.prevent="removebussiness(businessList)">删除</el-button>
                    </el-form-item>
                </el-col>
                </el-row>
                </div>


                <div class="kelist">
                <el-button v-if="addshow3" plain type="success" @click="addfinance" size="mini">新增</el-button>
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
                <el-col :span="12">
                    <el-form-item
                    v-for="(financeList, index) in form.financeList"
                    :label="'财务对接人联系邮箱'+(index+1)+'：'" 
                    :key="financeList.key"
                    :prop="'financeList.' + index + '.mail'"
                    :rules="rules.mail">
                        <el-input v-model.trim="financeList.mail" placeholder="请输入正确的邮箱" size="mini" clearable></el-input>
                        <el-button v-if="deleteshow3" plain type="danger" size="mini" @click.prevent="removefinance(financeList)">删除</el-button>
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
                    <el-form-item label="近三年经营收入金额（元）：" prop="threeYearIncome" :rules="rules.number">
                        <el-input v-model.trim="form.threeYearIncome"  placeholder="填写数字值,按年度填写" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="近三年的利润金额（元）：" prop="threeYearProfit" :rules="rules.number">
                        <el-input v-model.trim="form.threeYearProfit"  placeholder="填写数字值,按年度填写" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="近三年的开票金额（元）：" prop="threeYearInvoice" :rules="rules.number">
                        <el-input v-model.trim="form.threeYearInvoice"  placeholder="填写数字值,按年度填写" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="近三年的纳税金额（元）：" prop="threeYearTaxes" :rules="rules.number">
                        <el-input v-model.trim="form.threeYearTaxes"  placeholder="填写数字值,按年度填写" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="当前金融机构借贷余额（元）：" prop="financialLendingBalance" :rules="rules.number">
                        <el-input v-model.trim="form.financialLendingBalance" placeholder="填写数字值" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="当前非金融机构融资余额（元）：" prop="unfinancialLendingBalance" :rules="rules.number">
                        <el-input v-model.trim="form.unfinancialLendingBalance" placeholder="填写数字值"  size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="对外担保情况：" prop="externalGuarantees" :rules="rules.kong">
                        <el-radio-group v-model.trim="form.externalGuarantees" @change="danbaochange">
                        <el-radio label="1">是</el-radio>
                        <el-radio label="0">否</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="担保人：" prop="warrantorName" :rules="rules.kong">
                        <el-input v-model.trim="form.warrantorName"  size="mini" :disabled="danbaoinput" clearable></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="担保金额（元）：" prop="amountGuaranteed" :rules="rules.kong">
                        <el-input v-model.trim="form.amountGuaranteed" size="mini" :disabled="danbaoinput" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="担保期限：" prop="warrantyPeriod" :rules="rules.kong">
                        <el-input v-model.trim="form.warrantyPeriod"  size="mini" :disabled="danbaoinput" clearable></el-input>
                    </el-form-item>
                </el-col>
                </el-row>
                </div>
                </div>
                
            <!-- 按钮 -->
            <div class="in-button">
            <el-button type="primary" style="margin-top: 12px;" @click="next()">下一步</el-button></div>
            </div>
            </el-form>

            <el-form ref="form" :model="form" label-width="255px" status-icon>
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
                    <el-form-item label="过去两年交易额（元）：" prop="turnover" :rules="rules.number">
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
                    <el-form-item label="项目当前应收款总额（元）：" prop="totalReceivables" :rules="rules.number">
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
                    <el-form-item label="平均员工薪资（元）：" prop="averageEmployeeSalary" :rules="rules.number">
                        <el-input v-model.trim="form.averageEmployeeSalary" placeholder="填写数字值" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="单个员工薪资上限（元）：" prop="capEmployeeSalary" :rules="rules.number">
                        <el-input v-model.trim="form.capEmployeeSalary" placeholder="填写数字值" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="本次申请借款总额（元）：" prop="totalApplication" :rules="rules.number">
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
                    <el-form-item label="本次借款质押的应收款金额（元）：" prop="pledgedReceivables" :rules="rules.number">
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
                <el-button type="primary" style="margin-top: 12px;" @click="next()">下一步</el-button></div>
            </div>
            </el-form>

            <el-form ref="form" :model="form" label-width="255px" status-icon>
            <!-- 第三页 -->
            <div v-if="thirdshow" >  
                <el-row>
                <h4>文件上传   <span slot="tip" class="el-upload__tip">（请将各项所需提供文件压缩成一份压缩包，每项至少上传一份，压缩包大小不得超过20M。）</span></h4>
                
                </el-row>
            <div class="thirdpage">
                <el-row>
                <el-col :span="12">
                    <el-form-item label="前十大合作客户名单及年交易额：">
                        <el-upload
                        class="upload-demo"
                        drag
                        accept="application/zip"
                        :limit="5"
                        :http-request="Upload1"
                        :file-list='fileList1'
                        :before-upload="beforeAvatarUpload1"
                        :on-change="handleChange1"
                        action=""
                        list-type="picture"
                        multiple>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        </el-upload>

                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="人力服务合同：">
                        <el-upload
                        class="upload-demo"
                        drag
                        accept="application/zip"
                        :limit="5"
                        :http-request="Upload2"
                        :file-list='fileList2'
                        :before-upload="beforeAvatarUpload2"
                        :on-change="handleChange2"
                        action=""
                        list-type="picture"
                        multiple>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__tip" slot="tip"> * 扫描件加盖公章</div>
                        </el-upload>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="5份以上劳动合同：">
                        <el-upload
                        class="upload-demo"
                        drag
                        accept="application/zip"
                        :limit="5"
                        :http-request="Upload3"
                        :file-list='fileList3'
                        :before-upload="beforeAvatarUpload3"
                        :on-change="handleChange3"
                        action=""
                        list-type="picture"
                        multiple>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__tip" slot="tip"> * 扫描件加盖公章</div>
                        <div slot="tip" class="el-upload__tip">此项压缩包中至少含有五份劳动合同</div>
                        </el-upload>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="近一年的核心企业回款记录：">
                        <el-upload
                        class="upload-demo"
                        drag
                        accept="application/zip"
                        :limit="5"
                        :http-request="Upload4"
                        :file-list='fileList4'
                        :before-upload="beforeAvatarUpload4"
                        :on-change="handleChange4"
                        action=""
                        list-type="picture"
                        multiple>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__tip" slot="tip">* 银行水单或网银导出数据</div>
                        </el-upload>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="本次融资对应的发薪名单、金额：">
                        <el-upload
                        class="upload-demo"
                        drag
                        accept="application/zip"
                        :limit="5"
                        :http-request="Upload5"
                        :file-list='fileList5'
                        :before-upload="beforeAvatarUpload5"
                        :on-change="handleChange5"
                        action=""
                        list-type="picture"
                        multiple>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__tip" slot="tip">* 银行水单或网银导出数据</div>
                        </el-upload>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="应收款对账凭证：">
                        <el-upload
                        class="upload-demo"
                        drag
                        accept="application/zip"
                        :limit="5"
                        :http-request="Upload6"
                        :file-list='fileList6'
                        :before-upload="beforeAvatarUpload6"
                        :on-change="handleChange6"
                        action=""
                        list-type="picture"
                        multiple>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__tip" slot="tip">* 原始邮件或对账单盖章</div>
                        </el-upload>
                       
                    </el-form-item>
                </el-col>
                </el-row>
            </div>
            <!-- 按钮 -->
            <div class="in-button">
                <el-button type="primary" style="margin-top: 12px;" @click="last">上一步</el-button>
                <el-button type="primary" style="margin-top: 12px;" @click="next()">下一步</el-button>
                </div>
            </div>
            </el-form>

            <!-- 第四页 -->
            <div v-if="fourshow">
                <!-- 企业基本信息栏 -->
                <el-row>
                <h4>企业基本信息栏</h4>
                </el-row>

                <el-form ref="form" :model="form" label-width="255px" status-icon>
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
                    <el-form-item label="注册资本（元）：">
                        {{form.registeredCapital}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="实缴资本（元）：">
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
                        <span v-if="form.generalTaxpayers == '0'">
                        否
                        </span>
                        <span v-if="form.generalTaxpayers == '1'">
                        是
                        </span>
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
                        {{form.legalIdCard}}
                    </el-form-item>
                </el-col>

                <el-col :span="12">
                    <el-form-item label="法定代表人联系电话：">
                        {{form.legalPhone}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-table :data="this.form.controlList" border>
                <el-table-column property="controlName" label="实际控制人姓名" align="center"></el-table-column>
                <el-table-column property="idCard" label="实际控制人身份证号码" align="center"></el-table-column>
                <el-table-column property="phone" label="实际控制人联系电话" align="center"></el-table-column>
                </el-table>
                </el-row>

                <el-row>
                <el-table :data="this.form.businessList" border>
                <el-table-column property="businessName" label="业务对接人姓名" align="center"></el-table-column>
                <el-table-column property="phone" label="业务对接人联系电话" align="center"></el-table-column>
                <el-table-column property="mail" label="业务对接人联系邮箱" align="center"></el-table-column>
                </el-table>
                </el-row>

                <el-row>
                <el-table :data="this.form.financeList" border >
                <el-table-column property="financeName" label="财务对接人姓名" align="center"></el-table-column>
                <el-table-column property="phone" label="财务对接人联系电话" align="center"></el-table-column>
                <el-table-column property="mail" label="财务对接人联系邮箱" align="center"></el-table-column>
                </el-table>
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
                    <el-form-item label="近三年经营收入金额（元）：">
                        {{form.threeYearIncome}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="近三年的利润金额（元）：">
                        {{form.threeYearProfit}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="近三年的开票金额（元）：">
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
                    <el-form-item label="当前金融机构借贷余额（元）：">
                        {{form.financialLendingBalance}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="当前非金融机构融资余额（元）：">
                        {{form.unfinancialLendingBalance}}
                    </el-form-item>
                </el-col>
                </el-row>

                <span v-if="form.externalGuarantees == '1'">
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="对外担保情况：">
                            <span v-if="form.externalGuarantees == '0'">
                            否
                            </span>
                            <span v-if="form.externalGuarantees == '1'">
                            是
                            </span>
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
                        <el-form-item label="担保金额（元）：">
                            {{form.guaranteeAmount}}
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="担保期限：">
                            {{form.guaranteePeriod}}
                        </el-form-item>
                    </el-col>
                </el-row>
                
                </span>
                <!-- 判断是否显示 -->
                <span v-if="form.externalGuarantees == '0'">
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="对外担保情况：">
                            <span v-if="form.externalGuarantees == '0'">
                            否
                            </span>
                            <span v-if="form.externalGuarantees == '1'">
                            是
                            </span>
                        </el-form-item>
                    </el-col>
                </el-row>
                </span>

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
                    <el-form-item label="过去两年交易额（元）：">
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
                    <el-form-item label="项目当前应收款总额（元）：">
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
                    <el-form-item label="平均员工薪资（元）：">
                        {{form.averageEmployeeSalary}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="单个员工薪资上限（元）：">
                        {{form.capEmployeeSalary}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="本次申请借款总额（元）：">
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
                    <el-form-item label="本次借款质押的应收款金额（元）：">
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
                        {{this.cooperativeClients}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="人力服务合同：">
                        {{this.manpowerServiceContract}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="5份以上劳动合同：">
                        {{this.laborContract}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="近一年的核心企业回款记录：">
                        {{this.returnRecords}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="本次融资对应的发薪名单、金额：">
                        {{this.paymentList}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="应收款对账凭证：">
                        {{this.receivables}}
                    </el-form-item>
                </el-col>
                </el-row>
            </div>
                
            <!-- 按钮 -->
            <div class="in-button">
                <el-button type="primary" style="margin-top: 12px;" @click="last">上一步</el-button>
                <el-button type="primary" style="margin-top: 12px;" @click="submit('form')">提交</el-button>
            </div>
            </el-form>
            </div>
            
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
            deleteshow:false,

            cooperativeClients:"",//前十大合作客户名单及年交易额
            manpowerServiceContract:"",//人力服务合同
            laborContract:"",//5份以上劳动合同
            returnRecords:"",//近一年的核心企业回款记录
            paymentList:"",//本次融资对应的发薪名单、金额
            receivables:"",//应收款对账凭证

            fileList1:[],//文件容器
            fileList2:[],//文件容器
            fileList3:[],//文件容器
            fileList4:[],//文件容器
            fileList5:[],//文件容器
            fileList6:[],//文件容器
            auditingImage:"",//存储文件url

            addshow1:true,
            deleteshow1:false,
            addshow2:true,
            deleteshow2:false,
            addshow3:true,
            deleteshow3:false,

            //表单
            form:{
                enterpriseNo:"",            //企业编号
                productCd:"",               //产品号
                userName:"",                //用户账号
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
                legalName:"",               //法定代表人姓名
                legalIdCard:"",              //身份证号码
                legalPhone:"",               //联系电话
                
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
                warrantorName:"",                   //担保人
                amountGuaranteed:"",                //担保金额
                warrantyPeriod:"",                  //担保期限

            },

        }
    },
    components:{
    },
    methods: {
    //提交
    submit(formName){
    this.$refs[formName].validate((valid) => {
        if (valid) {
            let _self = this;
            this.form.enterpriseNo = sessionStorage.getItem("enterpriseNo");
            this.form.productCd = sessionStorage.getItem("productCd");
            this.form.userName = sessionStorage.getItem("username");
            //把上传图片的url发给后台做记录
            _self.$axios({
                    method: 'post',
                    url: _self.$store.state.domain +"/biz/order/apply",
                    data:this.form
                    })
                    .then(
                        response => {
                                if(response.data.code==0){
                                    this.$alert('恭喜您！'+response.data.detail.result, '借款信息提交结果', {
                                        confirmButtonText: '确定',
                                        callback: action => {
                                            this.active = 0;
                                        }
                                        });
                                    console.log(response.data.detail.result);
                                }else{
                                     this.$alert('很抱歉！信息提交'+response.data.msg+'，请再次检查信息填写是否正确或者联系民盛小贷客服', '借款信息提交结果', {
                                        confirmButtonText: '确定',
                                        callback: action => {
                                            
                                        }
                                        });
                                    console.log(response.data.msg);
                                }
                            }, response => {
                                console.log(response);
                            });
                            
                } else {
                console.log('error submit!!');
                return false;
            }
            });
    },

    //上传
      Upload1(file) {
        const OSS = require('ali-oss');
            let _self = this;
            var bucket;//OSS文件名称
            var region;
            var extranet;
            var accessKeyId;
            var accessKeySecret;
        this.$axios({
            method: 'post',
            url: this.$store.state.domain +"/biz/getAliyunOss"
            })
            .then(
                response => {// 向后台发请求 拉取OSS相关配置
                    
                    //后端提供数据
                    const client = new OSS({
                        region: 'oss-cn-shenzhen',// 服务器集群地区
                        extranet: response.data.extranet,
                        accessKeyId:response.data.secretId, // OSS帐号
                        accessKeySecret:response.data.secretKey, // OSS 密码
                        bucket:response.data.bucket // 阿里云上存储的 Bucket
                        })

                    // 存储路径，并且给图片改成唯一名字
                    var fileName = file.file.name 
                    this.cooperativeClients = fileName

                    //后缀名
                    const suffix = fileName.substr(fileName.indexOf("."));

                    //时间戳
                    const obj=this.timestamp();

                    //时间戳
                    const obj2=this.timestamp1();

                    //获取企业编号
                    const enterpriseNo = sessionStorage.getItem("enterpriseNo");

                    const storeAs = 'prod/meson/msscloan/file/enterprise/'+obj+'/'+enterpriseNo+'/cooperative/'+obj2+'-'
                    +fileName

                    //上传
                    client.put(storeAs,file.file).then(res => {
                        if(res.url!=null || res.url!=""){
                            
                            // console.log('服务器返回的文件url：')

                            this.form.cooperativeClients = res.url

                            //返回服务器文件url
                            // console.log(res.url)
                            
                            this.$notify({
                            title: '上传结果',
                            type: 'success',
                            offset: 100,
                            dangerouslyUseHTMLString: true,
                            message: '<strong>'+file.file.name+'文件上传成功！</strong>',
                            position: 'bottom-left'
                            });
                        }

                            }).catch(err => {
                                this.$message.error('上传文件异常');
                                console.log('上传文件异常：');
                                console.log(err)
                        });
                        //失败  
                    },
                    //打印
                    response => {
                    console.log(response);
                    }
            )
    },

    //上传
      Upload2(file) {
        const OSS = require('ali-oss');
            let _self = this;
            var bucket;//OSS文件名称
            var region;
            var extranet;
            var accessKeyId;
            var accessKeySecret;
        this.$axios({
            method: 'post',
            url: this.$store.state.domain +"/biz/getAliyunOss"
            })
            .then(
                response => {// 向后台发请求 拉取OSS相关配置
                    
                    //后端提供数据
                    const client = new OSS({
                        region: 'oss-cn-shenzhen',// 服务器集群地区
                        extranet: response.data.extranet,
                        accessKeyId:response.data.secretId, // OSS帐号
                        accessKeySecret:response.data.secretKey, // OSS 密码
                        bucket:response.data.bucket // 阿里云上存储的 Bucket
                        })

                    // 存储路径，并且给图片改成唯一名字
                    var fileName = file.file.name 

                    this.manpowerServiceContract = fileName

                    //后缀名
                    const suffix = fileName.substr(fileName.indexOf("."));

                    //时间戳
                    const obj=this.timestamp();

                    //时间戳
                    const obj2=this.timestamp1();

                    //获取企业编号
                    const enterpriseNo = sessionStorage.getItem("enterpriseNo");

                    const storeAs = 'prod/meson/msscloan/file/enterprise/'+obj+'/'+enterpriseNo+'/cooperative/'+obj2+'-'
                    +fileName

                    //上传
                    client.put(storeAs,file.file).then(res => {
                        if(res.url!=null || res.url!=""){
                            
                            // console.log('服务器返回的文件url：')

                            this.form.manpowerServiceContract = res.url

                            //返回服务器文件url
                            // console.log(res.url)
                            
                            this.$notify({
                            title: '上传结果',
                            type: 'success',
                            offset: 100,
                            dangerouslyUseHTMLString: true,
                            message: '<strong>'+file.file.name+'文件上传成功！</strong>',
                            position: 'bottom-left'
                            });
                            // console.log(file.file.name+'文件上传成功！')
                        }

                            }).catch(err => {
                                this.$message.error('上传文件异常');
                                console.log('上传文件异常：');
                                console.log(err)
                        });
                        //失败  
                    },
                    //打印
                    response => {
                    console.log(response);
                    }
            )
    },

    //上传
      Upload3(file) {
        const OSS = require('ali-oss');
            let _self = this;
            var bucket;//OSS文件名称
            var region;
            var extranet;
            var accessKeyId;
            var accessKeySecret;
        this.$axios({
            method: 'post',
            url: this.$store.state.domain +"/biz/getAliyunOss"
            })
            .then(
                response => {// 向后台发请求 拉取OSS相关配置
                    
                    //后端提供数据
                    const client = new OSS({
                        region: 'oss-cn-shenzhen',// 服务器集群地区
                        extranet: response.data.extranet,
                        accessKeyId:response.data.secretId, // OSS帐号
                        accessKeySecret:response.data.secretKey, // OSS 密码
                        bucket:response.data.bucket // 阿里云上存储的 Bucket
                        })

                    // 存储路径，并且给图片改成唯一名字
                    var fileName = file.file.name 

                    this.laborContract = fileName

                    //后缀名
                    const suffix = fileName.substr(fileName.indexOf("."));

                    //时间戳
                    const obj=this.timestamp();

                    //时间戳
                    const obj2=this.timestamp1();

                    //获取企业编号
                    const enterpriseNo = sessionStorage.getItem("enterpriseNo");

                    const storeAs = 'prod/meson/msscloan/file/enterprise/'+obj+'/'+enterpriseNo+'/cooperative/'+obj2+'-'
                    +fileName

                    //上传
                    client.put(storeAs,file.file).then(res => {
                        if(res.url!=null || res.url!=""){
                            
                            // console.log('服务器返回的文件url：')

                            this.form.laborContract = res.url

                            //返回服务器文件url
                            // console.log(res.url)
                            
                            this.$notify({
                            title: '上传结果',
                            type: 'success',
                            offset: 100,
                            dangerouslyUseHTMLString: true,
                            message: '<strong>'+file.file.name+'文件上传成功！</strong>',
                            position: 'bottom-left'
                            });
                        }

                            }).catch(err => {
                                this.$message.error('上传文件异常');
                                console.log('上传文件异常：');
                                console.log(err)
                        });
                        //失败  
                    },
                    //打印
                    response => {
                    console.log(response);
                    }
            )
    },

    //上传
      Upload4(file) {
        const OSS = require('ali-oss');
            let _self = this;
            var bucket;//OSS文件名称
            var region;
            var extranet;
            var accessKeyId;
            var accessKeySecret;
        this.$axios({
            method: 'post',
            url: this.$store.state.domain +"/biz/getAliyunOss"
            })
            .then(
                response => {// 向后台发请求 拉取OSS相关配置
                    
                    //后端提供数据
                    const client = new OSS({
                        region: 'oss-cn-shenzhen',// 服务器集群地区
                        extranet: response.data.extranet,
                        accessKeyId:response.data.secretId, // OSS帐号
                        accessKeySecret:response.data.secretKey, // OSS 密码
                        bucket:response.data.bucket // 阿里云上存储的 Bucket
                        })

                    // 存储路径，并且给图片改成唯一名字
                    var fileName = file.file.name 

                    this.returnRecords = fileName

                    //后缀名
                    const suffix = fileName.substr(fileName.indexOf("."));

                    //时间戳
                    const obj=this.timestamp();

                    //时间戳
                    const obj2=this.timestamp1();

                    //获取企业编号
                    const enterpriseNo = sessionStorage.getItem("enterpriseNo");

                    const storeAs = 'prod/meson/msscloan/file/enterprise/'+obj+'/'+enterpriseNo+'/cooperative/'+obj2+'-'
                    +fileName

                    //上传
                    client.put(storeAs,file.file).then(res => {
                        if(res.url!=null || res.url!=""){
                            
                            // console.log('服务器返回的文件url：')

                            this.form.returnRecords = res.url

                            //返回服务器文件url
                            // console.log(res.url)
                            
                            this.$notify({
                            title: '上传结果',
                            type: 'success',
                            offset: 100,
                            dangerouslyUseHTMLString: true,
                            message: '<strong>'+file.file.name+'文件上传成功！</strong>',
                            position: 'bottom-left'
                            });
                        }

                            }).catch(err => {
                                this.$message.error('上传文件异常');
                                console.log('上传文件异常：');
                                console.log(err)
                        });
                        //失败  
                    },
                    //打印
                    response => {
                    console.log(response);
                    }
            )
    },

    //上传
      Upload5(file) {
        const OSS = require('ali-oss');
            let _self = this;
            var bucket;//OSS文件名称
            var region;
            var extranet;
            var accessKeyId;
            var accessKeySecret;
        this.$axios({
            method: 'post',
            url: this.$store.state.domain +"/biz/getAliyunOss"
            })
            .then(
                response => {// 向后台发请求 拉取OSS相关配置
                    
                    //后端提供数据
                    const client = new OSS({
                        region: 'oss-cn-shenzhen',// 服务器集群地区
                        extranet: response.data.extranet,
                        accessKeyId:response.data.secretId, // OSS帐号
                        accessKeySecret:response.data.secretKey, // OSS 密码
                        bucket:response.data.bucket // 阿里云上存储的 Bucket
                        })

                    // 存储路径，并且给图片改成唯一名字
                    var fileName = file.file.name 

                    this.paymentList = fileName

                    //后缀名
                    const suffix = fileName.substr(fileName.indexOf("."));

                    //时间戳
                    const obj=this.timestamp();

                    //时间戳
                    const obj2=this.timestamp1();

                    //获取企业编号
                    const enterpriseNo = sessionStorage.getItem("enterpriseNo");

                    const storeAs = 'prod/meson/msscloan/file/enterprise/'+obj+'/'+enterpriseNo+'/cooperative/'+obj2+'-'
                    +fileName

                    //上传
                    client.put(storeAs,file.file).then(res => {
                        if(res.url!=null || res.url!=""){
                            
                            // console.log('服务器返回的文件url：')

                            this.form.paymentList = res.url
                            //返回服务器文件url
                            // console.log(res.url)
                            
                            this.$notify({
                            title: '上传结果',
                            type: 'success',
                            offset: 100,
                            dangerouslyUseHTMLString: true,
                            message: '<strong>'+file.file.name+'文件上传成功！</strong>',
                            position: 'bottom-left'
                            });
                        }

                            }).catch(err => {
                                this.$message.error('上传文件异常');
                                console.log('上传文件异常：');
                                console.log(err)
                        });
                        //失败  
                    },
                    //打印
                    response => {
                    console.log(response);
                    }
            )
    },

    //上传
      Upload6(file) {
        const OSS = require('ali-oss');
            let _self = this;
            var bucket;//OSS文件名称
            var region;
            var extranet;
            var accessKeyId;
            var accessKeySecret;
        this.$axios({
            method: 'post',
            url: this.$store.state.domain +"/biz/getAliyunOss"
            })
            .then(
                response => {// 向后台发请求 拉取OSS相关配置
                    
                    //后端提供数据
                    const client = new OSS({
                        region: 'oss-cn-shenzhen',// 服务器集群地区
                        extranet: response.data.extranet,
                        accessKeyId:response.data.secretId, // OSS帐号
                        accessKeySecret:response.data.secretKey, // OSS 密码
                        bucket:response.data.bucket // 阿里云上存储的 Bucket
                        })

                    // 存储路径，并且给图片改成唯一名字
                    var fileName = file.file.name 

                    this.receivables = fileName

                    //后缀名
                    const suffix = fileName.substr(fileName.indexOf("."));

                    //时间戳
                    const obj=this.timestamp();

                    //时间戳
                    const obj2=this.timestamp1();

                    //获取企业编号
                    const enterpriseNo = sessionStorage.getItem("enterpriseNo");

                    const storeAs = 'prod/meson/msscloan/file/enterprise/'+obj+'/'+enterpriseNo+'/cooperative/'+obj2+'-'
                    +fileName

                    //上传
                    client.put(storeAs,file.file).then(res => {
                        if(res.url!=null || res.url!=""){
                            
                            // console.log('服务器返回的文件url：')

                            this.form.receivables = res.url

                            //返回服务器文件url
                            // console.log(res.url)
                            
                            this.$notify({
                            title: '上传结果',
                            type: 'success',
                            offset: 100,
                            dangerouslyUseHTMLString: true,
                            message: '<strong>'+file.file.name+'文件上传成功！</strong>',
                            position: 'bottom-left'
                            });
                        }

                            }).catch(err => {
                                this.$message.error('上传文件异常');
                                console.log('上传文件异常：');
                                console.log(err)
                        });
                        //失败  
                    },
                    //打印
                    response => {
                    console.log(response);
                    }
            )
    },
     

//  时间戳
timestamp(){  
    const time = new Date();  
    const y = time.getFullYear();  
    const m = time.getMonth()+1;  
    const d = time.getDate();  
    const h = time.getHours();  
    const mm = time.getMinutes();  
    const s = time.getSeconds();  
    return ""+y+'-'+this.Add0(m)+'-'+this.Add0(d);  
},
Add0:function(m){  
    return m<10?'0'+m : m;  
} ,

//  时间戳1
timestamp1(){  
    const time = new Date();  
    const y = time.getFullYear();  
    const m = time.getMonth()+1;  
    const d = time.getDate();  
    const h = time.getHours();  
    const mm = time.getMinutes();  
    const s = time.getSeconds();  
    return ""+y+'-'+this.Add1(m)+'-'+this.Add1(d)+'_'+this.Add1(h)+this.Add1(mm)+this.Add1(s);  
},
Add1:function(m){  
    return m<10?'0'+m : m;  
} ,

        //点击单选担保
        danbaochange(val){
            if(val=='0'){
                this.danbaoinput=true;
            }else{
                this.danbaoinput=false;
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
            this.addshow1=false;
            this.deleteshow1=true;
        },

        //删除控制人
        removecontrol(item){
            var index = this.form.controlList.indexOf(item)
            if (index !== -1) {
            this.form.controlList.splice(index, 1)
            
            this.deleteshow1=false;
            this.addshow1=true;
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
            this.addshow2=false;
            this.deleteshow2=true;
        },

        //删除业务人
        removebussiness(item){
            var index = this.form.businessList.indexOf(item)
            if (index !== -1) {
            this.form.businessList.splice(index, 1)
            
            this.deleteshow3=false;
            this.addshow3=true;
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
            this.addshow3=false;
            this.deleteshow3=true;
        },

        //删除财务人
        removefinance(item){
            var index = this.form.financeList.indexOf(item)
            if (index !== -1) {
            this.form.financeList.splice(index, 1)
            
            this.deleteshow3=false;
            this.addshow3=true;
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
            this.firstshow=true;
            this.secondshow=false;
            this.thirdshow=false;
            this.fourshow=false;
            this.active = 0;
        }
      },

      //对文件列表进行控制
      handleChange1(file, fileList) {
        this.fileList1 = fileList.slice(-1);
      },

      //对文件列表进行控制
      handleChange2(file, fileList) {
        this.fileList2 = fileList.slice(-1);
      },

      //对文件列表进行控制
      handleChange3(file, fileList) {
        this.fileList3 = fileList.slice(-1);
      },

      //对文件列表进行控制
      handleChange4(file, fileList) {
        this.fileList4 = fileList.slice(-1);
      },

      //对文件列表进行控制
      handleChange5(file, fileList) {
        this.fileList5 = fileList.slice(-1);
      },

      //对文件列表进行控制
      handleChange6(file, fileList) {
        this.fileList6 = fileList.slice(-1);
      },

    
      beforeAvatarUpload1(file) {
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

      beforeAvatarUpload2(file) {
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

      beforeAvatarUpload3(file) {
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

      beforeAvatarUpload4(file) {
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

      beforeAvatarUpload5(file) {
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

      beforeAvatarUpload6(file) {
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
    border-bottom: 1px solid rgba(197, 195, 195, 0.637);

    padding: 30px;
    margin-bottom: 20px;
}
.thirdpage .el-row .el-col:nth-child(odd){
    border-right: 1px solid rgba(197, 195, 195, 0.637);
    padding-right: 40px;
}
.kelist{
    margin-top: 30px;
    border-top: 1px dashed rgb(187, 185, 185);
    padding-top: 40px;
}
</style>
