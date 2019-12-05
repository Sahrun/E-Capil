import React from "react";
import { httpService } from "../../service/HttpService";
import { config } from "../../config/Config";
import { Loading } from "../layout/Loading";
import { Prototype as prototype } from "../../general/Prototype";
import { Validation as validation  } from "../../general/Validation";
import { FilterBuilder as filterBuilder } from "../../general/FilterBuilder";
import { QueueScheduler } from "rxjs/internal/scheduler/QueueScheduler";

const modalName = "form-warga-modal";

class Warga extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wargas: [],
      submitted: false,
      warga: {
        NIK: "",
        nama_lengkap: "",
        nama_panggilan: "",
        tempat_tinggal: "",
        tempat_lahir: "",
        tanggal_lahir: "",
        jenis_kelamin: "",
        alamat: "",
        RT: "",
        RW: "",
        kecamatan: "",
        agama: "",
        status: "",
        pekerjaan: "",
        kewarganegaraan: "",
        foto: "",
        foto_ktp: ""
      },
      filtered: {
        NIK: "",
        nama_lengkap: "",
        tanggal_lahir: "",
        jenis_kelamin: "",
        usia: "",
        status: "",
        agama: "",
        pekerjaan: "",
        created_at: "",
        updated_at: ""
      },
      defaultGrid:{
        count:filterBuilder.properties.count,
        page:filterBuilder.properties.page,
      }
    };
    this.addWarga = this.addWarga.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  componentWillMount() {
    this.getDataAll();
  }

  getDataAll() {
    const filtered = this.filtered();
    const filter = filterBuilder.generateUri(filtered,this.state.defaultGrid.count,this.state.defaultGrid.page);
    Loading.SpinnerRun(true);
    httpService.Get(config.routeApi.wargas, filter).then(response => {
      this.setState(
        {
          wargas: response
        },
        function() {
          Loading.SpinnerRun(false);
        }
      );
    });
  }
  handleFilter(event) {
    const target = event.target;
    var value = null;

    if (target.type === config.inputType.checkbox) {
      value = target.checked;
    } else if (target.type === config.inputType.file) {
      value = event.target.files[0];
    } else {
      value = target.value;
    }
    const name = target.name;
    let _filtered = Object.assign({}, this.state.filtered);
    _filtered[name] = value;
    this.setState({ filtered: _filtered },()=>{
      this.getDataAll();
    });

  }
  filtered() {
    var filterd = [];
    const field = filterBuilder.properties.filed;
    const operation = filterBuilder.operation.operation;

    if (!validation.isNull(this.state.filtered.NIK)) 
    {
        filterd.push({field:"NIK",operation:"like",value:this.state.filtered.NIK});
    }
    if (!validation.isNull(this.state.filtered.nama_lengkap)) 
    {
        filterd.push({field:"nama_lengkap",operation:"like",value:this.state.filtered.nama_lengkap});
    }
    if (!validation.isNull(this.state.filtered.tanggal_lahir)) 
    {
        filterd.push({field:"tanggal_lahir",operation:"like",value:this.state.filtered.tanggal_lahir});
    }
    if (!validation.isNull(this.state.filtered.jenis_kelamin)) 
    {
        filterd.push({field:"jenis_kelamin",operation:"like",value:this.state.filtered.jenis_kelamin});
    }
    if (!validation.isNull(this.state.filtered.usia)) 
    {
        filterd.push({field:"usia",operation:"like",value:this.state.filtered.usia});
    }
    if (!validation.isNull(this.state.filtered.status)) 
    {
        filterd.push({field:"status",operation:"like",value:this.state.filtered.status});
    }
    if (!validation.isNull(this.state.filtered.agama)) 
    {
        filterd.push({field:"agama",operation:"like",value:this.state.filtered.agama});
    }
    if (!validation.isNull(this.state.filtered.pekerjaan)) 
    {
        filterd.push({field:"pekerjaan",operation:"like",value:this.state.filtered.pekerjaan});
    }
    if (!validation.isNull(this.state.filtered.created_at)) 
    {
        filterd.push({field:"created_at",operation:"like",value:this.state.filtered.created_at});
    }
    if (!validation.isNull(this.state.filtered.updated_at)) 
    {
        filterd.push({field:"updated_at",operation:"like",value:this.state.filtered.updated_at});
    }
    
    return filterd;
  }
  initialForm() {
    var newWarga = {
      NIK: "",
      nama_lengkap: "",
      nama_panggilan: "",
      tempat_tinggal: "",
      tempat_lahir: "",
      tanggal_lahir: "",
      jenis_kelamin: "",
      alamat: "",
      RT: "",
      RW: "",
      kecamatan: "",
      agama: "",
      status: "",
      pekerjaan: "",
      kewarganegaraan: "",
      foto: "",
      foto_ktp: ""
    };
    this.setState({ warga: newWarga });
  }

  addWarga() {
    this.initialForm();
    prototype.modal(modalName, config.modalType.show);
  }

  handleSubmit(e) {
    e.preventDefault();
    Loading.SpinnerRun(true);

    const formData = new FormData();
    formData.append("NIK", this.state.warga.NIK);
    formData.append("nama_lengkap", this.state.warga.nama_lengkap);
    formData.append("nama_panggilan", this.state.warga.nama_panggilan);
    formData.append("tempat_tinggal", this.state.warga.tempat_tinggal);
    formData.append("tempat_lahir", this.state.warga.tempat_lahir);
    formData.append("tanggal_lahir", this.state.warga.tanggal_lahir);
    formData.append("jenis_kelamin", this.state.warga.jenis_kelamin);
    formData.append("alamat", this.state.warga.alamat);
    formData.append("RT", this.state.warga.RT);
    formData.append("RW", this.state.warga.RW);
    formData.append("kecamatan", this.state.warga.kecamatan);
    formData.append("agama", this.state.warga.agama);
    formData.append("status", this.state.warga.status);
    formData.append("pekerjaan", this.state.warga.pekerjaan);
    formData.append("kewarganegaraan", this.state.warga.kewarganegaraan);
    formData.append("foto", this.state.warga.foto);
    formData.append("foto_ktp", this.state.warga.foto_ktp);

    this.CheckExistingNIk()
      .then(result => {
        if (!result == true) {
          httpService
            .Post(config.routeApi.wargaSave, formData)
            .then(response => {
              prototype.modal(modalName, config.modalType.hide);
              prototype.showAlert(config.alertType.success);
              Loading.SpinnerRun(false);
              this.getAllWarga();
            })
            .catch(e => {
              Loading.SpinnerRun(false);
            });
        } else {
          prototype.showAlert(
            config.alertType.warning,
            "NIK : " + this.state.warga.NIK + " sudah terdaftar"
          );
          Loading.SpinnerRun(false);
        }
      })
      .catch(() => {
        Loading.SpinnerRun(false);
      });
  }

  CheckExistingNIk() {
    const NIK = this.state.warga.NIK;
    const promaise = new Promise(function(resolve, reject) {
      httpService
        .Get(config.routeApi.ChekingExistingNIK, NIK)
        .then(response => {
          resolve(response.data);
        })
        .catch(e => {
          reject(e);
        });
    });
    return promaise;
  }

  handleChange(event) {
    const target = event.target;
    var value = null;

    if (target.type === config.inputType.checkbox) {
      value = target.checked;
    } else if (target.type === config.inputType.file) {
      value = event.target.files[0];
    } else {
      value = target.value;
    }
    const name = target.name;
    let _warga = Object.assign({}, this.state.warga);
    _warga[name] = value;
    this.setState({ warga: _warga });
  }

  render() {
    return (
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Data Warga</h4>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                id="multi-filter-select"
                className="display table table-striped table-hover"
              >
                <thead>
                  <tr>
                    <th>No</th>
                    <th>NIK</th>
                    <th>Nama Lengkap</th>
                    <th>Tanggal Lahir</th>
                    <th>Jenis Kelamin</th>
                    <th>Usia</th>
                    <th>Status</th>
                    <th>Agama</th>
                    <th>Pekerjaan</th>
                    <th>Tanggal Dibuat</th>
                    <th>Tanggal Diubah</th>
                  </tr>
                  <tr>
                    <th></th>
                    <th>
                      <input
                        type="text"
                        name="NIK"
                        className="form-control"
                        onChange={this.handleFilter.bind(this)}
                      />
                    </th>
                    <th>
                      <input
                        type="text"
                        name="nama_lengkap"
                        className="form-control"
                        onChange={this.handleFilter.bind(this)}
                      />
                    </th>
                    <th>
                      <input
                        type="date"
                        name="tanggal_lahir"
                        className="form-control"
                        onChange={this.handleFilter.bind(this)}
                      />
                    </th>
                    <th>
                      <input
                        type="text"
                        name="jenis_kelamin"
                        className="form-control"
                        onChange={this.handleFilter.bind(this)}
                      />
                    </th>
                    <th>
                      <input type="text" 
                      name="usia" 
                      className="form-control"
                      onChange={this.handleFilter.bind(this)} />
                    </th>
                    <th>
                      <input
                        type="text"
                        name="status"
                        className="form-control"
                        onChange={this.handleFilter.bind(this)}
                      />
                    </th>
                    <th>
                      <input
                        type="text"
                        name="agama"
                        className="form-control"
                        onChange={this.handleFilter.bind(this)}
                      />
                    </th>
                    <th>
                      <input
                        type="text"
                        name="pekerjaan"
                        className="form-control"
                        onChange={this.handleFilter.bind(this)}
                      />
                    </th>
                    <th>
                      <input
                        type="date"
                        name="created_at"
                        className="form-control"
                      />
                    </th>
                    <th>
                      <input
                        type="date"
                        name="updated_at"
                        className="form-control"
                      />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.wargas.map((warga, i) => (
                    <tr key={i}>
                      <td>{i+1}</td>
                      <td>{warga.NIK}</td>
                      <td>{warga.nama_lengkap}</td>
                      <td>{warga.tanggal_lahir}</td>
                      <td>{warga.jenis_kelamin}</td>
                      <td>{warga.usia}</td>
                      <td>{warga.status}</td>
                      <td>{warga.agama}</td>
                      <td>{warga.pekerjaan}</td>
                      <td>{warga.created_at}</td>
                      <td>{warga.updated_at}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="card-footer">
            <div className="d-flex align-items-center">
              <select className="form-control">
              {filterBuilder.properties.Rows.map((row, i) => (
                  <option key={i} value={row}>{row}</option>
              ))}
              </select>
              <span>Rows</span> 
              <span>Page</span>
              <button className="btn btn-primary">Previews</button>
              <button className="btn btn-primary">Next</button>
              <button
                className="btn btn-primary btn-round ml-auto"
                onClick={this.addWarga.bind(this)}
              >
                Tambah {/* <i className="fa fa-plus"></i> */}
              </button>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id={modalName}
          tabIndex="-1"
          role="dialog"
          aria-hidden="true"
          data-backdrop="static"
        >
          <div
            className="modal-dialog "
            role="document"
            style={{ maxWidth: "none" }}
          >
            <form onSubmit={this.handleSubmit}>
              <div
                className="modal-content"
                style={{ width: "90%", margin: "auto" }}
              >
                <div className="modal-header no-bd text-center">
                  <h5 className="modal-title">
                    <span className="fw-mediumbold">Form Data Warga</span>
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-inline">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label className="label-control-inline-blok text-right col-lg-3 ">
                          <strong>NIK</strong>
                        </label>
                        <div className="col-lg-6">
                          <input
                            id="nik"
                            type="text"
                            name="NIK"
                            className="form-control input-full"
                            onChange={this.handleChange.bind(this)}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="label-control-inline-blok text-right col-lg-3 ">
                          <strong> Nama Lengkap</strong>
                        </label>
                        <div className="col-lg-6">
                          <input
                            id="nama_lengkap"
                            name="nama_lengkap"
                            type="text"
                            className="form-control input-full"
                            required
                            onChange={this.handleChange.bind(this)}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="label-control-inline-blok text-right col-lg-3">
                          <strong> Nama Pangilan</strong>
                        </label>
                        <div className="col-lg-6">
                          <input
                            id="nama_panggilan"
                            type="text"
                            name="nama_panggilan"
                            className="form-control input-full"
                            required
                            onChange={this.handleChange.bind(this)}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="label-control-inline-blok text-right col-lg-3">
                          <strong>Kewarganegaraan</strong>
                        </label>
                        <div className="col-lg-6">
                          <input
                            id="kewarganegaraan"
                            type="text"
                            name="kewarganegaraan"
                            className="form-control input-full"
                            required
                            onChange={this.handleChange.bind(this)}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="label-control-inline-blok text-right col-lg-3">
                          <strong> Tempat Tinggal</strong>
                        </label>
                        <div className="col-lg-6">
                          <input
                            id="tempat_tinggal"
                            name="tempat_tinggal"
                            type="text"
                            className="form-control input-full"
                            required
                            onChange={this.handleChange.bind(this)}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="label-control-inline-blok text-right col-lg-3">
                          <strong>Alamat</strong>
                        </label>
                        <div className="col-lg-6">
                          <input
                            id="te"
                            type="text"
                            name="alamat"
                            className="form-control input-full"
                            required
                            onChange={this.handleChange.bind(this)}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="label-control-inline-blok text-right col-lg-3">
                          <strong>RT</strong>
                        </label>
                        <div className="col-lg-6">
                          <input
                            id="RT"
                            type="text"
                            name="RT"
                            className="form-control input-full"
                            onChange={this.handleChange.bind(this)}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="label-control-inline-blok text-right col-lg-3">
                          <strong>RW</strong>
                        </label>
                        <div className="col-lg-6">
                          <input
                            id="RW"
                            type="text"
                            name="RW"
                            className="form-control input-full"
                            onChange={this.handleChange.bind(this)}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="label-control-inline-blok text-right col-lg-3">
                          <strong>Kecamatan</strong>
                        </label>
                        <div className="col-lg-6">
                          <input
                            id="kecamatan"
                            type="text"
                            name="kecamatan"
                            className="form-control input-full"
                            onChange={this.handleChange.bind(this)}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="label-control-inline-blok text-right col-lg-3">
                          <strong>Tempat Lahir</strong>
                        </label>
                        <div className="col-lg-6">
                          <input
                            id="tempat_lahir"
                            type="text"
                            name="tempat_lahir"
                            className="form-control input-full"
                            required
                            onChange={this.handleChange.bind(this)}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="label-control-inline-blok text-right col-lg-3">
                          <strong>Tanggal Lahir</strong>
                        </label>
                        <div className="col-lg-6">
                          <input
                            id="tanggal_lahir"
                            type="date"
                            className="form-control"
                            name="tanggal_lahir"
                            required
                            onChange={this.handleChange.bind(this)}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="label-control-inline-blok text-right col-lg-3">
                          <strong>Jenis Kelamin</strong>
                        </label>
                        <div className="col-lg-6">
                          <input
                            type="radio"
                            name="jenis_kelamin"
                            value="laki-laki"
                            required
                            onClick={this.handleChange.bind(this)}
                          />{" "}
                          Laki - Laki
                          <input
                            type="radio"
                            name="jenis_kelamin"
                            value="wanita"
                            required
                            onClick={this.handleChange.bind(this)}
                          />{" "}
                          Prempuan
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="label-control-inline-blok text-right col-lg-3">
                          <strong>Agama</strong>
                        </label>
                        <div className="col-lg-6">
                          <select
                            className="form-control"
                            name="agama"
                            required
                            onChange={this.handleChange.bind(this)}
                          >
                            <option>- Pilih -</option>
                            <option value="Islam">Islam</option>
                            <option value="Kristen">Kristen</option>
                            <option value="Katholik">Katholik</option>
                            <option value="Budha">Budha</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="label-control-inline-blok text-right col-lg-3">
                          <strong>Status</strong>
                        </label>
                        <div className="col-lg-6">
                          <select
                            className="form-control"
                            name="status"
                            required
                            onChange={this.handleChange.bind(this)}
                          >
                            <option>- Pilih -</option>
                            <option value="belum-menikah">Belum Menikah</option>
                            <option value="menikah">Menikah</option>
                            <option value="janda">Janda</option>
                            <option value="duda">Duda</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="label-control-inline-blok text-right col-lg-3">
                          <strong>Pekerjaan</strong>
                        </label>
                        <div className="col-lg-6">
                          <select
                            className="form-control"
                            name="pekerjaan"
                            required
                            onChange={this.handleChange.bind(this)}
                          >
                            <option>- Pilih -</option>
                            <option value="swasta">Pegawai Swasta</option>
                            <option value="pns">PNS</option>
                            <option value="tani">Tani</option>
                            <option value="nelayan">Nelayan</option>
                            <option value="wirausaha">Wirausaha</option>
                            <option value="lainya">Lainya</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="label-control-inline-blok text-right col-lg-3">
                          <strong>Foto</strong>
                        </label>
                        <div className="col-lg-6">
                          <input
                            type="file"
                            className="form-control-file"
                            id="foto"
                            name="foto"
                            onChange={this.handleChange.bind(this)}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="label-control-inline-blok text-right col-lg-3">
                          <strong>KTP</strong>
                        </label>
                        <div className="col-lg-6">
                          <input
                            type="file"
                            className="form-control-file"
                            id="foto_ktp"
                            name="foto_ktp"
                            onChange={this.handleChange.bind(this)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer no-bd">
                  <button type="submit" id="submit" className="btn btn-success">
                    Simpan
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Batal
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Warga;
