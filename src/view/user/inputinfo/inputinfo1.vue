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
                <h4>企业基本信息栏<span></span></h4>
                
                </el-row>
                
                <div class="tab-out">
                <el-row>
                <el-col :span="24">
                    <el-form-item label="企业名称：" prop="enterpriseName" >
                        {{form.enterpriseName}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="统一社会征信号码或营业执照号码：" prop="socialCode">
                        {{form.socialCode}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="24">
                    <el-form-item label="注册地址：" prop="registeredAddress">
                        {{form.registeredAddress}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="24">
                    <el-form-item label="实际经营地址：" prop="businessAddress">
                        {{form.businessAddress}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="注册资本（元）：" prop="registeredCapital" :rules="rules.number">
                        {{form.registeredCapital}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="实缴资本（元）：" prop="paidCapital" :rules="rules.number">
                        {{form.paidCapital}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="成立开始日期：" prop="startingDate" :rules="rules.kong">
                        {{form.startingDate}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="成立有效截止日期：" prop="endingDate" :rules="rules.kong">
                        {{form.endingDate}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="是否为一般纳税人：" prop="generalTaxpayers" :rules="rules.kong">
                        <span v-if="form.generalTaxpayers=='是'">是</span>
                        <span v-if="form.generalTaxpayers=='否'">否</span>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="法定代表人姓名" prop="legalName" :rules="rules.kong">
                        {{form.legalName}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="法定代表人身份证号码" prop="legalIdCard" :rules="rules.checkid">
                        {{form.legalIdCard}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="法定代表人联系电话" prop="legalPhone" :rules="rules.phone">
                        {{form.legalPhone}}
                        </el-form-item>
                </el-col>
                </el-row>
                </div>


            <div class="thirdpage">
                
                <div class="tab-out">
               <el-row>
            <el-table
              :data="this.form.controlList"
              size="mini"
            >
              <el-table-column prop="controlName" label="实际控制人姓名" align="center"></el-table-column>
              <el-table-column prop="controlIdCard" label="实际控制人身份证号码" align="center"></el-table-column>
              <el-table-column prop="controlPhone" label="实际控制人联系电话" align="center"></el-table-column>
            </el-table>
               </el-row>

          <el-row>
            <el-table
              :data="this.form.businessList"
              size="mini"
            >
              <el-table-column prop="businessName" label="业务对接人姓名" align="center"></el-table-column>
              <el-table-column prop="businessPhone" label="业务对接人联系电话" align="center"></el-table-column>
              <el-table-column prop="businessMail" label="业务对接人联系邮箱" align="center"></el-table-column>
            </el-table>
          </el-row>

          <el-row>
            <el-table :data="this.form.financeList" size="mini">
              <el-table-column prop="financeName" label="财务对接人姓名" align="center"></el-table-column>
              <el-table-column prop="financePhone" label="财务对接人联系电话" align="center"></el-table-column>
              <el-table-column prop="financeMail" label="财务对接人联系邮箱" align="center"></el-table-column>
            </el-table>
          </el-row>
          </div>
            </div>

        <!-- 银行卡信息 -->
                <el-row>
                <h4>银行卡信息<span></span></h4>
                </el-row>


                <div class="tab-out">
                <el-row>
                <el-col :span="24">
                    <el-form-item label="银行卡卡号：" prop="cardNo" :rules="rules.kong">
                        <el-input v-model.trim="form.cardNo"  size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="银行名称：" prop="bankName" :rules="rules.kong">
                        <el-input v-model.trim="form.bankName"  size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="账户户名：" prop="accountName" :rules="rules.kong">
                        <el-input v-model.trim="form.accountName"  size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                </el-row>
                <el-row>
                <el-col :span="12">
                    <el-form-item label="银行支行名称：" prop="bankBranchName" :rules="rules.kong">
                        <el-input v-model.trim="form.bankBranchName"  size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                </el-row>
                </div>

                <!-- 企业财务信息栏 -->
                <el-row>
                <h4>企业财务信息栏<span></span></h4>
                </el-row>

                <div class="thirdpage">
                    
                <div class="tab-out">
                    
                    <el-row>
                        <el-switch
                        v-model="value"
                        @change="selectyear"
                        active-text="包含今年"
                        inactive-text="不包含今年">
                        </el-switch>    |    需填写近三年数据 
                    </el-row>

                <el-row>
                     <el-table :data="form.threeYearDevelopmentSituation" border highlight-current-row size="mini">
                        <el-table-column prop="nearlyYears" label="年份" align="center">
                        </el-table-column>

                        <el-table-column prop="incomeSum" label="经营收入金额（元）" align="center" :rules="rules.number">
                            <template slot-scope="scope">
                                <el-input size="mini" v-model="scope.row.incomeSum" placeholder="填写数字值,按年度填写" ></el-input> 
                            </template>
                        </el-table-column>
                        <el-table-column prop="profitSum" label="利润金额（元）" align="center" :rules="rules.number">
                            <template slot-scope="scope">
                                <el-input size="mini" v-model="scope.row.profitSum" placeholder="填写数字值,按年度填写" ></el-input> 
                            </template>
                        </el-table-column>
                        <el-table-column prop="invoiceSum" label="开票金额（元）" align="center" :rules="rules.number">
                            <template slot-scope="scope">
                                <el-input size="mini" v-model="scope.row.invoiceSum" placeholder="填写数字值,按年度填写" ></el-input> 
                            </template>
                        </el-table-column>

                        <el-table-column prop="taxesSum" label="纳税金额（元）" align="center" :rules="rules.number">
                            <template slot-scope="scope">
                                <el-input size="mini" v-model="scope.row.taxesSum" placeholder="填写数字值,按年度填写" ></el-input> 
                            </template>
                        </el-table-column>
                    </el-table>
                </el-row>
                </div>
                </div>

                
                <div class="tab-out">
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
                
            <!-- 按钮 -->
            <div class="in-button">
            <el-button type="primary" style="margin-top: 12px;" @click="next()">下一步</el-button>
            </div>
            </div>
            
            <!-- 第二页 -->
            <div v-if="secondshow">
                <el-row>
                <h4>人力薪资贷申请<span></span></h4>
                </el-row>

                
                <div class="tab-out">
                <el-row>
                <el-col :span="12">
                    <el-form-item label="应收账款主体（债务人）全称：" prop="paymentSubject" :rules="rules.kong">
                        <el-input v-model.trim="form.paymentSubject" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="开始合作期限：" prop="periodCooperation" :rules="rules.number">
                        <el-input v-model.trim="form.periodCooperation" placeholder="填写数字值" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                
                <div class="thirdpage">
                    <el-row>
                        <el-switch
                        v-model="value2"
                        @change="selectyear2"
                        active-text="包含今年"
                        inactive-text="不包含今年">
                        </el-switch>    |    需填写近两年交易额 
                    </el-row>
                <el-row>
                     <el-table :data="form.turnover" border highlight-current-row size="mini">
                        <el-table-column prop="turnoverYear" label="年份" align="center">
                        </el-table-column>

                        <el-table-column prop="turnoverSum" label="交易额（元）" align="center" :rules="rules.number">
                            <template slot-scope="scope">
                                <el-input size="mini" v-model="scope.row.turnoverSum" placeholder="填写数字值,按年度填写" ></el-input> 
                            </template>
                        </el-table-column>
                    </el-table>
                </el-row>
                </div>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="结算账期（天）：" prop="paymentPeriod" :rules="rules.number">
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
                    <el-form-item label="本次申请借款总额（元）：" prop="totalApplication" :rules="rules.range">
                        <el-input v-model.trim="form.totalApplication" placeholder="填写数字值" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="本次申请借款最长期限：" prop="applicationDeadline" :rules="rules.day">
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
                </div>
                
            <!-- 按钮 -->
            <div class="in-button">
                <el-button type="primary" style="margin-top: 12px;" @click="last">上一步</el-button>
                <el-button type="primary" style="margin-top: 12px;" @click="next()">下一步</el-button></div>
            </div>

            <!-- 第三页 -->
            <div v-if="thirdshow" >  
                <el-row>
                <h4>文件上传<span></span> </h4>
                
                </el-row>
            <div class="thirdpage">
                
                <div class="tab-out">
                <el-row>
                <el-col :span="12">
                    <el-form-item label="前十大合作客户名单及年交易额：">
                        <el-upload
                        class="upload-demo"
                        drag
                        :limit="2"
                        :http-request="Upload1"
                        :file-list='fileList1'
                        :on-exceed="handleExceed1"
                        :before-upload="beforeAvatarUpload1"
                        :on-change="handleChange1"
                        action=""
                        multiple>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        <div slot="tip" class="el-upload__tip">（2份以内（含），每份20M以内（含），格式不限）</div>
                        </el-upload>
                        <el-progress v-if="videoFlag1" :percentage="videoUploadPercent1" style="margin-top:30px;"></el-progress>
                        

                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="人力服务合同：">
                        <el-upload
                        class="upload-demo"
                        drag
                        :limit="5"
                        :http-request="Upload2"
                        :file-list='fileList2'
                        :on-exceed="handleExceed2"
                        :before-upload="beforeAvatarUpload2"
                        :on-change="handleChange2"
                        action=""
                        multiple>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__tip" slot="tip"> * 扫描件加盖公章</div>
                        <div slot="tip" class="el-upload__tip">（5份以内（含），每份20M以内（含），格式不限）</div>
                        </el-upload>
                        <el-progress v-if="videoFlag2" :percentage="videoUploadPercent2" style="margin-top:30px;"></el-progress>
                        
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="5份以上劳动合同：">
                        <el-upload
                        class="upload-demo"
                        drag
                        :limit="5"
                        :http-request="Upload3"
                        :file-list='fileList3'
                        :on-exceed="handleExceed3"
                        :before-upload="beforeAvatarUpload3"
                        :on-change="handleChange3"
                        action=""
                        multiple>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__tip" slot="tip"> * 扫描件加盖公章</div>
                        <div slot="tip" class="el-upload__tip">(5份以内（含），每份20M以内（含），格式不限)</div>
                        </el-upload>
                        <el-progress v-if="videoFlag3" :percentage="videoUploadPercent3" style="margin-top:30px;"></el-progress>
                        
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="近一年的核心企业回款记录：">
                        <el-upload
                        class="upload-demo"
                        drag
                        :limit="12"
                        :http-request="Upload4"
                        :file-list='fileList4'
                        :on-exceed="handleExceed4"
                        :before-upload="beforeAvatarUpload4"
                        :on-change="handleChange4"
                        action=""
                        multiple>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__tip" slot="tip">* 银行水单或网银导出数据</div>
                        <div slot="tip" class="el-upload__tip">(12份以内（含），每份20M以内（含），格式不限)</div>
                        </el-upload>
                        <el-progress v-if="videoFlag4" :percentage="videoUploadPercent4" style="margin-top:30px;"></el-progress>
                        
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="本次融资对应的发薪名单、金额：">
                        <el-upload
                        class="upload-demo"
                        drag
                        :limit="10"
                        :http-request="Upload5"
                        :file-list='fileList5'
                        :on-exceed="handleExceed5"
                        :before-upload="beforeAvatarUpload5"
                        :on-change="handleChange5"
                        action=""
                        multiple>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__tip" slot="tip">* 银行水单或网银导出数据</div>
                        <div slot="tip" class="el-upload__tip">(10份以内（含），每份20M以内（含），格式不限)</div>
                        </el-upload>
                        <el-progress v-if="videoFlag5" :percentage="videoUploadPercent5" style="margin-top:30px;"></el-progress>
                        
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="应收款对账凭证：">
                         
                        <el-upload
                        class="upload-demo"
                        drag
                        :limit="12"
                        :http-request="Upload6"
                        :file-list='fileList6'
                        :on-exceed="handleExceed6"
                        :before-upload="beforeAvatarUpload6"
                        :on-change="handleChange6"
                        multiple
                        action="">
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__tip" slot="tip">* 原始邮件或对账单盖章</div>
                        <div slot="tip" class="el-upload__tip">(12份以内（含），每份20M以内（含），格式不限)</div>
                        </el-upload>
                        <el-progress v-if="videoFlag6" :percentage="videoUploadPercent6" style="margin-top:30px;"></el-progress>
                        
                    </el-form-item>
                       
                </el-col>
                </el-row>
                </div>
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
                <h4>企业基本信息栏<span></span></h4>
                </el-row>

                <el-form ref="form" :model="form" label-width="255px" status-icon>
                <div class="thirdpage">
                    
                <div class="tab-out">
                <el-row>
                <el-col :span="24">
                    <el-form-item label="企业名称：" >
                        {{form.enterpriseName}}
                    </el-form-item>
                </el-col>
                </el-row>
                <el-row>
                <el-col :span="24">
                    <el-form-item label="统一社会征信号码或营业执照号码：">
                        {{form.socialCode}}
                    </el-form-item>
                </el-col>
                </el-row>
                <el-row>
                <el-col :span="24">
                    <el-form-item label="注册地址：">
                        {{form.registeredAddress}}
                    </el-form-item>
                </el-col>
                </el-row>
                <el-row>
                <el-col :span="24">
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
                <el-col :span="8">
                    <el-form-item label="成立开始日期：">
                        {{form.startingDate}}
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="成立有效截止日期：">
                        {{form.endingDate}}
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="是否为一般纳税人：">
                        <span v-if="form.generalTaxpayers=='是'">是</span>
                        <span v-if="form.generalTaxpayers=='否'">否</span>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="8">
                    <el-form-item label="法定代表人姓名：">
                        {{form.legalName}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="法定代表人身份证号码：">
                        {{form.legalIdCard}}
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item label="法定代表人联系电话：">
                        {{form.legalPhone}}
                    </el-form-item>
                </el-col>
                </el-row>
                </div>

                <div class="tab-out">
                <el-row>
                <el-table :data="this.form.controlList">
                <el-table-column property="controlName" label="实际控制人姓名" align="center"></el-table-column>
              <el-table-column prop="controlIdCard" label="实际控制人身份证号码" align="center"></el-table-column>
              <el-table-column prop="controlPhone" label="实际控制人联系电话" align="center"></el-table-column>
                </el-table>
                </el-row>

                <el-row>
                <el-table :data="this.form.businessList">
                <el-table-column property="businessName" label="业务对接人姓名" align="center"></el-table-column>
              <el-table-column prop="businessPhone" label="业务对接人联系电话" align="center"></el-table-column>
              <el-table-column prop="businessMail" label="业务对接人联系邮箱" align="center"></el-table-column>
                </el-table>
                </el-row>

                <el-row>
                <el-table :data="this.form.financeList" >
                <el-table-column property="financeName" label="财务对接人姓名" align="center"></el-table-column>
              <el-table-column prop="financePhone" label="财务对接人联系电话" align="center"></el-table-column>
              <el-table-column prop="financeMail" label="财务对接人联系邮箱" align="center"></el-table-column>
                </el-table>
                </el-row>
                </div>
                </div>

                <!-- 银行卡信息 -->
                <el-row>
                <h4>银行卡信息<span></span></h4>
                </el-row>

                <div class="thirdpage">
                    <div class="tab-out">
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
                </div>

                <!-- 企业财务信息栏 -->
                <el-row >
                <h4>企业财务信息栏<span></span></h4>
                </el-row>

                <div class="thirdpage">
                    <div class="tab-out">
                <el-row>
                     <el-table :data="form.threeYearDevelopmentSituation" border highlight-current-row size="mini">
                        <el-table-column prop="nearlyYears" label="年份" align="center">
                        </el-table-column>
                        <el-table-column prop="incomeSum" label="经营收入金额（元）" align="center" :rules="rules.number">                          
                        </el-table-column>
                        <el-table-column prop="profitSum" label="利润金额（元）" align="center" :rules="rules.number">
                        </el-table-column>
                        <el-table-column prop="invoiceSum" label="开票金额（元）" align="center" :rules="rules.number">
                        </el-table-column>
                        <el-table-column prop="taxesSum" label="纳税金额（元）" align="center" :rules="rules.number">
                        </el-table-column>
                    </el-table>
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
                    <el-col :span="8">
                        <el-form-item label="对外担保情况：">
                            <span v-if="form.externalGuarantees == '否'">
                            否
                            </span>
                            <span v-if="form.externalGuarantees == '1'">
                            是
                            </span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="担保人：">
                            {{form.guarantee}}
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="担保金额（元）：">
                            {{form.guaranteeAmount}}
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="担保期限：">
                            {{form.guaranteePeriod}}
                        </el-form-item>
                    </el-col>
                </el-row>
                
                
                </span>
                <!-- 判断是否显示 -->
                <span v-if="form.externalGuarantees == '0'">
                <el-row>
                    <el-col :span="8">
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
                </div>

                <el-row>
                <h4>人力薪资贷申请<span></span></h4>
                </el-row>

                <div class="thirdpage">
                    <div class="tab-out">
                <el-row>
                <el-col :span="8">
                    <el-form-item label="付款主体名称：">
                        {{form.paymentSubject}}
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="开始合作期限：">
                        {{form.periodCooperation}}
                    </el-form-item>
                </el-col>
                </el-row>

                <div class="thirdpage">
                <el-row>
                     <el-table :data="form.turnover" border highlight-current-row size="mini">
                        <el-table-column prop="turnoverYear" label="年份" align="center">
                        </el-table-column>

                        <el-table-column prop="turnoverSum" label="交易额（元）" align="center" :rules="rules.number">
                        </el-table-column>
                    </el-table>
                </el-row>
                </div>

                <el-row>
                <el-col :span="8">
                    <el-form-item label="付款账期：">
                        {{form.paymentPeriod}}
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="项目当前应收款总额（元）：">
                        {{form.totalReceivables}}
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="项目员工总数：">
                        {{form.projectEmployees}}
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="平均员工薪资（元）：">
                        {{form.averageEmployeeSalary}}
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="单个员工薪资上限（元）：">
                        {{form.capEmployeeSalary}}
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="本次申请借款总额（元）：">
                        {{form.totalApplication}}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="本次申请借款最长期限：">
                        {{form.applicationDeadline}}
                    </el-form-item>
                </el-col>
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

                <el-col :span="12">
                    <el-form-item label="本次借款担保方式：">
                        {{form.borrowingGuarantee}}
                    </el-form-item>
                </el-col>
                </el-row>
                </div>
            </div>

                <el-row>
                <h4>影像信息<span></span></h4>
                </el-row>

            <div class="thirdpage">
                <div class="tab-out">
                <el-row>
                <el-col :span="24">
                    <el-form-item label="前十大合作客户名单及年交易额：">
                        {{this.cooperativeClients}}
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="人力服务合同：">
                        {{this.manpowerServiceContract}}
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="5份以上劳动合同：">
                        {{this.laborContract}}
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="近一年的核心企业回款记录：">
                        {{this.returnRecords}}
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="本次融资对应的发薪名单、金额：">
                        {{this.paymentList}}
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="应收款对账凭证：">
                        {{this.receivables}}
                    </el-form-item>
                </el-col>
                </el-row>
                </div>
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
            value: true,
            value2: true,

            rules,  
            active: 0,
            firstshow:true,//第一页显示
            secondshow:false,//第二页显示
            thirdshow:false,//第三页显示
            fourshow:false,//第四页显示
            danbaoinput:false,//担保输入框是否禁用
            deleteshow:false,
            
            cooperativeClients:[],//前十大合作客户名单及年交易额
            manpowerServiceContract:[],//人力服务合同
            laborContract:[],//5份以上劳动合同
            returnRecords:[],//近一年的核心企业回款记录
            paymentList:[],//本次融资对应的发薪名单、金额
            receivables:[],//应收款对账凭证

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
            videoFlag1:false,//进度条
            videoFlag2:false,//进度条
            videoFlag3:false,//进度条
            videoFlag4:false,//进度条
            videoFlag5:false,//进度条
            videoFlag6:false,//进度条
            videoUploadPercent1:0,
            videoUploadPercent2:0,
            videoUploadPercent3:0,
            videoUploadPercent4:0,
            videoUploadPercent5:0,
            videoUploadPercent6:0,
            

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
                generalTaxpayers:"是",                //是否为一般纳税人
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
                    mail:"",               //联系邮箱
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
                threeYearDevelopmentSituation:[{
                    nearlyYears:"",         //年份
                    incomeSum:"",       //近三年经营收入金额
                    profitSum:"",     //近三年的利润金额
                    invoiceSum:"",     //近三年的开票金额
                    taxesSum:""     //近三年的纳税金额
                }],
                
                
                financialLendingBalance:"",             //当前金融机构借贷余额
                unfinancialLendingBalance:"",               //当前非金融机构融资余额

                cooperativeClients:[],              //前十大合作客户名单及年交易额
                externalGuarantees:"1",              //对外担保情况

                // 人力薪资贷申请
                manpowerServiceContract:[],             //人力服务合同
                laborContract:[],               //5份以上劳动合同
                paymentSubject:"",              //付款主体名称
                periodCooperation:"",               //开始合作期限

                //过去两年交易额
                turnover:[{
                    turnoverYear:"",            //年份
                    turnoverSum:"",             //交易额
                }],

                paymentPeriod:"",               //付款账期
                returnRecords:[],               //近一年的核心企业回款记录
                totalReceivables:"",                //项目当前应收款总额
                projectEmployees:"",                //项目员工总数
                averageEmployeeSalary:"",               //平均员工薪资
                capEmployeeSalary:"",               //单个员工薪资上限
                paymentList:[],             //本次融资对应的发薪名单、金额
                receivables:[],             //应收款对账凭证
                totalApplication:"",                //本次申请借款总额
                applicationDeadline:"",             //本次申请借款最长期限
                repaymentAccount:"",                //本次借款指定回款及还款账户
                pledgedReceivables:"",              //本次借款质押的应收款金额
                borrowingGuarantee:"",              //本次借款担保方式
                warrantorName:"",                   //担保人
                amountGuaranteed:"",                //担保金额
                warrantyPeriod:""                //担保期限

            },
      

        }
    },
    components:{
    },
    mounted() {
        this.selectyear()
        this.selectyear2()
        this.getdetail()
    },
    methods: {
        selectyear(){
            this.$axios({
                    method: 'post',
                    url: this.$store.state.domain +"/biz/nearlyThreeYears"
                    })
                    .then(
                        response => {
                                    this.form.threeYearDevelopmentSituation = response.data
                                    
                                    if(this.value == true){
                                        //删除最后一组
                                        this.form.threeYearDevelopmentSituation.splice(this.form.threeYearDevelopmentSituation.length-1, 1);
                                
                                    }else if(this.value == false){
                                        this.form.threeYearDevelopmentSituation.splice(0, 1);
                                        
                                    }
                            }, response => {
                                console.log(response);
                            });
        },
        selectyear2(){
            this.$axios({
                    method: 'post',
                    url: this.$store.state.domain +"/biz/nearlyTwoYears"
                    })
                    .then(
                        response => {
                                    this.form.turnover = response.data
                                    
                                    if(this.value2 == true){
                                        //删除最后一组
                                        this.form.turnover.splice(this.form.turnover.length-1, 1);
                                
                                    }else if(this.value2 == false){
                                        this.form.turnover.splice(0, 1);
                                        
                                    }
                            }, response => {
                                console.log(response);
                            });
        },
        gettwoyear(){
            this.$axios({
                    method: 'post',
                    url: this.$store.state.domain +"/biz/nearlyTwoYears"
                    })
                    .then(
                        response => {
                                    this.form.turnover = response.data
                            }, response => {
                                console.log(response);
                            });
        },
        getthreeyear(){
            this.$axios({
                    method: 'post',
                    url: this.$store.state.domain +"/biz/nearlyThreeYears"
                    })
                    .then(
                        response => {
                                    this.form.threeYearDevelopmentSituation = response.data
                            }, response => {
                                console.log(response);
                            });
        },
        getdetail(){
            this.form.enterpriseNo = sessionStorage.getItem("enterpriseNo");
            //把上传图片的url发给后台做记录
            this.$axios({
                    method: 'post',
                    url: this.$store.state.domain +"/biz/user/getBasicInfo",
                    data:this.form
                    })
                    .then(
                        response => {
                                if(response.data.code==0){
                                    this.form.enterpriseName = response.data.detail.enterpriseName
                                    this.form.socialCode = response.data.detail.socialCode
                                    this.form.registeredAddress = response.data.detail.registeredAddress
                                    this.form.businessAddress = response.data.detail.businessAddress
                                    this.form.registeredCapital = response.data.detail.registeredCapital
                                    this.form.paidCapital = response.data.detail.paidCapital
                                    this.form.startingDate = response.data.detail.startingDate
                                    this.form.endingDate = response.data.detail.endingDate
                                    this.form.generalTaxpayers = response.data.detail.generalTaxpayers
                                    this.form.legalName = response.data.detail.legalName
                                    this.form.legalPhone = response.data.detail.legalPhone
                                    this.form.legalIdCard = response.data.detail.legalIdCard
                                    this.form.controlList = response.data.detail.controlList
                                    this.form.businessList = response.data.detail.businessList
                                    this.form.financeList = response.data.detail.financeList
                                    console.log(this.form)
                                }else{
                                     this.$alert(response.data.msg, '提示', {
                                        confirmButtonText: '确定',
                                        callback: action => {
                                            
                                        }
                                        });
                                    console.log(response.data.msg);
                                }
                            }, response => {
                                console.log(response);
                            });
        },
    //提交
    submit(formName){
    this.$refs[formName].validate((valid) => {
        if (valid) {
            let _self = this;
            this.form.enterpriseNo = sessionStorage.getItem("enterpriseNo");
            this.form.productCd = sessionStorage.getItem("productCd");
            this.form.userName = sessionStorage.getItem("username");
            if(this.form.generalTaxpayers == '是'){
                this.form.generalTaxpayers = '1'
            }else{
                this.form.generalTaxpayers = '0'
            }
            //把上传图片的url发给后台做记录
            _self.$axios({
                    method: 'post',
                    url: _self.$store.state.domain +"/biz/order/apply",
                    data:this.form
                    })
                    .then(
                        response => {
                                if(response.data.code==0){
                                    this.$alert('恭喜您！申请借款信息提交成功！', '借款信息提交结果', {
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
          var _that=this;
        this.videoFlag1= true;
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
                    
                    this.cooperativeClients.push(fileName)

                    //后缀名
                    const suffix = fileName.substr(fileName.indexOf("."));

                    //时间戳
                    const obj=this.timestamp();

                    //时间戳
                    const obj2=this.timestamp1();

                    //获取企业编号
                    const enterpriseNo = sessionStorage.getItem("enterpriseNo");

                    const storeAs = 'test/meson/msscloan/file/enterprise/'+obj+'/'+enterpriseNo+'/cooperative/'+obj2+'-'
                    +fileName

                    this.form.cooperativeClients.push('http://mssaas.oss-cn-shenzhen.aliyuncs.com/'+storeAs)
                    console.log(this.form.cooperativeClients)

                    //上传
                    client.multipartUpload(storeAs,file.file,{
                        progress:function (p) { //获取进度条的值
                            // console.log(p)
                            _that.videoUploadPercent1 = p*100
                            
                        }}).then(res => {
                        if(res.url!=null || res.url!=""){
                            
                            // console.log('服务器返回的文件url：')

                            //返回服务器文件url
                            // console.log(res.url)
                            this.videoFlag1 = false;
                            _that.videoUploadPercent1 = 0;
                            
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
                                this.$message.error('上传文件异常:'+err);
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
          var _that=this;
        this.videoFlag2= true;
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

                    this.manpowerServiceContract.push(fileName)

                    //后缀名
                    const suffix = fileName.substr(fileName.indexOf("."));

                    //时间戳
                    const obj=this.timestamp();

                    //时间戳
                    const obj2=this.timestamp1();

                    //获取企业编号
                    const enterpriseNo = sessionStorage.getItem("enterpriseNo");

                    const storeAs = 'test/meson/msscloan/file/enterprise/'+obj+'/'+enterpriseNo+'/cooperative/'+obj2+'-'
                    +fileName

                    this.form.manpowerServiceContract.push('http://mssaas.oss-cn-shenzhen.aliyuncs.com/'+storeAs)

                    //上传
                    client.multipartUpload(storeAs,file.file,{
                        progress:function (p) { //获取进度条的值
                            // console.log(p)
                            _that.videoUploadPercent2 = p*100
                            
                        }}).then(res => {
                        if(res.url!=null || res.url!=""){
                            
                            // console.log('服务器返回的文件url：')

                            //返回服务器文件url
                            // console.log(res.url)
                            this.videoFlag2 = false;
                            _that.videoUploadPercent2 = 0;
                            
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
                                this.$message.error('上传文件异常:'+err);
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
          var _that=this;
        this.videoFlag3= true;
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

                    this.laborContract.push(fileName)

                    //后缀名
                    const suffix = fileName.substr(fileName.indexOf("."));

                    //时间戳
                    const obj=this.timestamp();

                    //时间戳
                    const obj2=this.timestamp1();

                    //获取企业编号
                    const enterpriseNo = sessionStorage.getItem("enterpriseNo");

                    const storeAs = 'test/meson/msscloan/file/enterprise/'+obj+'/'+enterpriseNo+'/cooperative/'+obj2+'-'
                    +fileName

                    this.form.laborContract.push('http://mssaas.oss-cn-shenzhen.aliyuncs.com/'+storeAs)

                    //上传
                    client.multipartUpload(storeAs,file.file,{
                        progress:function (p) { //获取进度条的值
                            // console.log(p)
                            _that.videoUploadPercent3 = p*100
                            
                        }}).then(res => {
                        if(res.url!=null || res.url!=""){
                            
                            // console.log('服务器返回的文件url：')


                            //返回服务器文件url
                            // console.log(res.url)
                            this.videoFlag3 = false;
                            _that.videoUploadPercent3 = 0;
                            
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
                                this.$message.error('上传文件异常:'+err);
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
          var _that=this;
        this.videoFlag4= true;
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

                    this.returnRecords.push(fileName)

                    //后缀名
                    const suffix = fileName.substr(fileName.indexOf("."));

                    //时间戳
                    const obj=this.timestamp();

                    //时间戳
                    const obj2=this.timestamp1();

                    //获取企业编号
                    const enterpriseNo = sessionStorage.getItem("enterpriseNo");

                    const storeAs = 'test/meson/msscloan/file/enterprise/'+obj+'/'+enterpriseNo+'/cooperative/'+obj2+'-'
                    +fileName

                    this.form.returnRecords.push('http://mssaas.oss-cn-shenzhen.aliyuncs.com/'+storeAs)

                    //上传
                    client.multipartUpload(storeAs,file.file,{
                        progress:function (p) { //获取进度条的值
                            // console.log(p)
                            _that.videoUploadPercent4 = p*100
                            
                        }}).then(res => {
                        if(res.url!=null || res.url!=""){
                            
                            // console.log('服务器返回的文件url：')


                            //返回服务器文件url
                            // console.log(res.url)
                            this.videoFlag4 = false;
                            _that.videoUploadPercent4 = 0;
                            
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
                                this.$message.error('上传文件异常:'+err);
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
          var _that=this;
        this.videoFlag5= true;
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

                    this.paymentList.push(fileName)

                    //后缀名
                    const suffix = fileName.substr(fileName.indexOf("."));

                    //时间戳
                    const obj=this.timestamp();

                    //时间戳
                    const obj2=this.timestamp1();

                    //获取企业编号
                    const enterpriseNo = sessionStorage.getItem("enterpriseNo");

                    const storeAs = 'test/meson/msscloan/file/enterprise/'+obj+'/'+enterpriseNo+'/cooperative/'+obj2+'-'
                    +fileName

                    this.form.paymentList.push('http://mssaas.oss-cn-shenzhen.aliyuncs.com/'+storeAs)

                    //上传
                    client.multipartUpload(storeAs,file.file,{
                        progress:function (p) { //获取进度条的值
                            // console.log(p)
                            _that.videoUploadPercent5 = p*100
                            
                        }}).then(res => {
                        if(res.url!=null || res.url!=""){
                            
                            // console.log('服务器返回的文件url：')

                            //返回服务器文件url
                            // console.log(res.url)
                            this.videoFlag5 = false;
                            _that.videoUploadPercent5 = 0;
                            
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
                                this.$message.error('上传文件异常:'+err);
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
          var _that=this;
        this.videoFlag6= true;
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

                    this.receivables.push(fileName)

                    //后缀名
                    const suffix = fileName.substr(fileName.indexOf("."));

                    //时间戳
                    const obj=this.timestamp();

                    //时间戳
                    const obj2=this.timestamp1();

                    //获取企业编号
                    const enterpriseNo = sessionStorage.getItem("enterpriseNo");

                    const storeAs = 'test/meson/msscloan/file/enterprise/'+obj+'/'+enterpriseNo+'/cooperative/'+obj2+'-'
                    +fileName

                    this.form.receivables.push('http://mssaas.oss-cn-shenzhen.aliyuncs.com/'+storeAs)

                    //上传
                    client.multipartUpload(storeAs,file.file,{
                        progress:function (p) { //获取进度条的值
                            // console.log(p)
                            _that.videoUploadPercent6 = p*100
                            
                        }}).then(res => {
                        if(res.url!=null || res.url!=""){
                            
                            // console.log('服务器返回的文件url：')

                            //返回服务器文件url
                            // console.log(res.url)
                            this.videoFlag6 = false;
                            _that.videoUploadPercent6 = 0;
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
                                this.$message.error('上传文件异常:'+err);
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
        this.fileList1 = fileList.slice(-3);
      },

      //对文件列表进行控制
      handleChange2(file, fileList) {
        this.fileList2 = fileList.slice(-6);
      },

      //对文件列表进行控制
      handleChange3(file, fileList) {
        this.fileList3 = fileList.slice(-6);
      },

      //对文件列表进行控制
      handleChange4(file, fileList) {
        this.fileList4 = fileList.slice(-13);
      },

      //对文件列表进行控制
      handleChange5(file, fileList) {
        this.fileList5 = fileList.slice(-11);
      },

      //对文件列表进行控制
      handleChange6(file, fileList) {
        this.fileList6 = fileList.slice(-13);
      },

      handleExceed1(files, fileList) {
        this.$message.warning(`当前限制选择 2 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      handleExceed2(files, fileList) {
        this.$message.warning(`当前限制选择 5 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      handleExceed3(files, fileList) {
        this.$message.warning(`当前限制选择 5 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      handleExceed4(files, fileList) {
        this.$message.warning(`当前限制选择 12 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      handleExceed5(files, fileList) {
        this.$message.warning(`当前限制选择 10 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      handleExceed6(files, fileList) {
        this.$message.warning(`当前限制选择 12 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },

      beforeAvatarUpload1(file) {
        const length = this.fileList1.length <= 2;
        const isLt20M = file.size / 1024 / 1024 < 20;

        if (!length) {
          this.$message.error('此项上传文件数量不得大于2份，上传第3份文件失败！');
        }

        if (!isLt20M) {
          this.$message.error('上传文件大小不能超过 20MB，此文件上传失败!');
        }
        return length && isLt20M;
      },

      beforeAvatarUpload2(file) {
        const length = this.fileList2.length <= 5;
        const isLt20M = file.size / 1024 / 1024 < 20;

        
        if (!length) {
          this.$message.error('此项上传文件数量不得大于5份，上传第6份文件失败！');
        }

        if (!isLt20M) {
          this.$message.error('上传文件大小不能超过 20MB，此文件上传失败!');
        }
        return length && isLt20M;
      },

      beforeAvatarUpload3(file) {
        const length = this.fileList2.length <= 5;
        const isLt20M = file.size / 1024 / 1024 < 20;

        if (!length) {
          this.$message.error('此项上传文件数量不得大于5份，上传第6份文件失败！');
        }

        if (!isLt20M) {
          this.$message.error('上传文件大小不能超过 20MB，此文件上传失败!');
        }
        return length && isLt20M;
      },

      beforeAvatarUpload4(file) {
        const length = this.fileList2.length <= 12;
        const isLt20M = file.size / 1024 / 1024 < 20;

        if (!length) {
          this.$message.error('此项上传文件数量不得大于12份，上传第13份文件失败！');
        }
        if (!isLt20M) {
          this.$message.error('上传文件大小不能超过 20MB，此文件上传失败!');
        }
        return length && isLt20M;
      },

      beforeAvatarUpload5(file) {
        const length = this.fileList2.length <= 10;
        const isLt20M = file.size / 1024 / 1024 < 20;

        if (!length) {
          this.$message.error('此项上传文件数量不得大于10份，上传第11份文件失败！');
        }
        if (!isLt20M) {
          this.$message.error('上传文件大小不能超过 20MB，此文件上传失败!');
        }
        return length && isLt20M;
      },

      beforeAvatarUpload6(file) {
        const length = this.fileList2.length <= 12;
        const isLt20M = file.size / 1024 / 1024 < 20;

        if (!length) {
          this.$message.error('此项上传文件数量不得大于12份，上传第13份文件失败！');
        }
        if (!isLt20M) {
          this.$message.error('上传文件大小不能超过 20MB，此文件上传失败!');
        }
        return length && isLt20M;
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
    position: relative;
    padding: 30px 0 10px 10px;
    margin-bottom: 30px;
    font-size: 22px;
    color: rgb(245, 109, 30);
    border-bottom: 1px solid rgba(40, 144, 214, 0.199);
    }

.box-card h4 span{
    position: absolute;
    right: 0px;
    top: 68px;
    border-width:21px 21px 0;
    border-style:solid;
    border-color: rgb(80, 235, 222) transparent transparent;/*灰 透明 透明 */
    width: 21px;
    height: 21px;
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

    padding: 10px 15px;
}

.kelist{
    margin-top: 30px;
    border-top: 1px dashed rgba(187, 185, 185, 0.705);
    padding-top: 40px;
}

.tab-out{
    border: 1px dashed rgba(139, 187, 231, 0.932);
    overflow: hidden;
    margin: 0px 15px 10px;
    border-radius: 5px;

}

.tab-out .el-row{
    border-bottom: 1px dashed rgba(139, 187, 231, 0.541);
    font-family:'黑体';
    padding-top: 20px;
}
</style>
