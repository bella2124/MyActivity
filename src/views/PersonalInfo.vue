<template>
  <div>
   <el-row :gutter="24">
      <el-form :model="form" label-position="left" label-width="100px" class="demo-form" :rules="rules" ref="form" @keyup.enter.native="submitForm('form')">
        <el-card >
          <div slot="header">
            <span><b>Profiles</b></span>
          </div>
            <br>
            <el-col :span="12">
              <el-form-item label="Date:" prop="date">
                <el-date-picker
                format="yyyy/MM/dd"
                value-format="yyyy-MM-dd"
                type="date"
                v-model="form.date" style="width: 100%">
                </el-date-picker>
              </el-form-item>
                <el-form-item label="Name" prop="name">
                  <el-input v-model="form.name"></el-input>
                </el-form-item> 
                <el-form-item label="Lastname" prop="lastname">
                  <el-input v-model="form.lastname"></el-input>
                </el-form-item>
              </el-col>
             <el-col :span="12">
                  <el-form-item label="Middlename" prop="middlename" >
                    <el-input v-model="form.middlename"></el-input>
                  </el-form-item>
                  <el-form-item label="Age" prop="age">
                    <el-input v-model="form.age" type="number"></el-input>
                  </el-form-item> 
                <el-form-item label="Sex" prop="sex">
                  <el-select v-model="form.sex" placeholder="Select.." style="width: 100%">
                    <el-option label="Male" value="male"></el-option>
                    <el-option label="Female" value="female"></el-option>
                  </el-select>
                </el-form-item>
               </el-col>
                  <br><br>
         </el-card> 
            <br><br>
          <el-card >
            <div slot="header">
              <span><b>Other Information</b></span>
            </div>
                <br>
              <el-col :span="12">
                        <el-form-item label="BirthDate:" prop="birthdate">
                  <el-date-picker
                  format="yyyy/MM/dd"
                  value-format="yyyy-MM-dd"
                  type="date"
                  v-model="form.birthdate" style="width: 100%">
                  </el-date-picker>
                </el-form-item>
              </el-col>
                <el-col :span="12">
                        <el-form-item label="Address" prop="address" >
                          <el-input v-model="form.address"></el-input>
                        </el-form-item>
                 </el-col>
                    <el-button type="success" @click="submitForm('form')" v-show="isEdit === false" style="float:right; margin:5px"><i class="el-icon-check">&nbsp;</i>Submit</el-button>
                      <el-button type="success" @click="update('form')" v-show="isEdit === true" style="float: right"><i class="el-icon-check">&nbsp;</i>Update</el-button><br><br> 
                    
                        
                          <el-button type="primary"  @click="dialogVisible = true" style="float:left">Display Image</el-button>
                          <el-dialog :visible.sync="dialogVisible" >
                              <span><b>Image </b></span>
                              <hr>
                            <el-row :gutter="24">
                            <p>Your Image:</p>
                            <p></p>
                            </el-row>
                              </el-dialog>
                              <br><br>
         </el-card> 
      </el-form>
     </el-row>
         <br>
         <el-card v-show="isTable === true">
           <div slot="header">
        <span><b>Personal Information</b></span>
      </div>
      <!-- <Personalinfo v-on:add="add"/> -->
           <el-table  border  :row-class-name="tableRowClassName"
        style="width: 100%" :data="forms" class="el-table-column">
               <el-table-column label="Date" prop="dates"></el-table-column>
             <el-table-column label="Name" prop="names"></el-table-column>
              <el-table-column label="Lastname" prop="lastnames"></el-table-column>
               <el-table-column label="Middlename" prop="middlenames"></el-table-column>
                <el-table-column label="Age" prop="ages"></el-table-column>
                 <el-table-column label="Sex" prop="sexs"></el-table-column>
                 <el-table-column label="Options">
                   <template slot-scope="scope">
                  <el-button type="warning" @click="updatePersonal (scope.row)" icon="el-icon-edit" size="mini"></el-button>
                  <el-button type="danger" icon="el-icon-delete" prop="id" size="mini" @click="deleted (scope.$index)" ></el-button>
                   </template>
                  </el-table-column>
           </el-table>
   </el-card>
  </div>
</template>
<script>
export default {
  components: {
    // Personalinfo
  },
  data () {
    return {
      dialogVisible: false,
      hidden: '',
      forms:[],
      isTable:false,
      isEdit: false,
      form: {
        id: 1,
      name: '',
      lastname: '',
      middlename: '',
      age: '',
      sex: '',
      dates: '',
      birthdate: '',
      address: ''
      },
      rules:{
        date: [
          { required: true, message: 'Required', trigger: 'change' }
        ],
        name: [
          { required: true, message: 'Required', trigger: 'change' }
        ],
         lastname: [
          { required: true, message: 'Required', trigger: 'change' }
        ],
         middlename: [
          { required: true, message: 'Required', trigger: 'change' }
        ],
         age: [
          { required: true, message: 'Required', trigger: 'change' }
        ],
         sex: [
          { required: true, message: 'Required', trigger: 'change' }
          ],
           address: [
          { required: true, message: 'Required', trigger: 'change' }
        ],
         birthdate: [
          { required: true, message: 'Required', trigger: 'change' }]

        }
    }
  },
  methods: {
    add() {
      this.forms.push({
        id: this.form.id,
     names: this.form.name,
     lastnames: this.form.lastname,
     middlenames: this.form.middlename,
     ages: this.form.age,
     sexs: this.form.sex,
     dates: this.form.date
       })
       this.form.id++
       alert('Save Succesfully')
       this.isTable = true
    },
    submitForm(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.add();
          this.$refs[form].resetFields();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    updatePersonal (row) {
      this.isEdit = true
      // this.form = Object.assign({}, row)
      // this.form.id = row.forms.id
      // alert('a')
      this.form.date = row.dates
      this.form.name = row.names
      this.form.lastname = row.lastnames
      this.form.middlename = row.middlenames
      this.form.age = row.ages
      this.form.sex = row.sexs
    },
    update (form) {
      const index= this.forms.findIndex(form => form.id == this.form.id )
      this.forms.splice(index, 1, {
      id: this.form.id,
     names: this.form.name,
     lastnames: this.form.lastname,
     middlenames: this.form.middlename,
     ages: this.form.age,
     sexs: this.form.sex,
     dates: this.form.date
       })
       this.isEdit = false 
       this.$refs[form].resetFields(); 
  },
  deleted (index) {
  // const index = this.form.findIndex(x => x.id === id)
  this.forms.splice(index, 1);
  alert(index)

  }
  }
};
</script>
<style scoped>
.el-table-column {
background: 'red';
}
</style>

+