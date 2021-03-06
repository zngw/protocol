// Code generated by protoc-gen-go.
// source: protocol.proto
// DO NOT EDIT!

/*
Package pb is a generated protocol buffer package.

It is generated from these files:
	protocol.proto

It has these top-level messages:
	GameLoginReq
	GameLoginResp
*/
package pb

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

// 登录请求
type GameLoginReq struct {
	Account  string `protobuf:"bytes,1,opt,name=account" json:"account,omitempty"`
	Password string `protobuf:"bytes,2,opt,name=password" json:"password,omitempty"`
}

func (m *GameLoginReq) Reset()                    { *m = GameLoginReq{} }
func (m *GameLoginReq) String() string            { return proto.CompactTextString(m) }
func (*GameLoginReq) ProtoMessage()               {}
func (*GameLoginReq) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{0} }

func (m *GameLoginReq) GetAccount() string {
	if m != nil {
		return m.Account
	}
	return ""
}

func (m *GameLoginReq) GetPassword() string {
	if m != nil {
		return m.Password
	}
	return ""
}

// 登录返回
type GameLoginResp struct {
	Result int32 `protobuf:"varint,1,opt,name=result" json:"result,omitempty"`
}

func (m *GameLoginResp) Reset()                    { *m = GameLoginResp{} }
func (m *GameLoginResp) String() string            { return proto.CompactTextString(m) }
func (*GameLoginResp) ProtoMessage()               {}
func (*GameLoginResp) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{1} }

func (m *GameLoginResp) GetResult() int32 {
	if m != nil {
		return m.Result
	}
	return 0
}

func init() {
	proto.RegisterType((*GameLoginReq)(nil), "pb.GameLoginReq")
	proto.RegisterType((*GameLoginResp)(nil), "pb.GameLoginResp")
}

func init() { proto.RegisterFile("protocol.proto", fileDescriptor0) }

var fileDescriptor0 = []byte{
	// 122 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x09, 0x6e, 0x88, 0x02, 0xff, 0xe2, 0xe2, 0x2b, 0x28, 0xca, 0x2f,
	0xc9, 0x4f, 0xce, 0xcf, 0xd1, 0x03, 0x33, 0x84, 0x98, 0x0a, 0x92, 0x94, 0x5c, 0xb8, 0x78, 0xdc,
	0x13, 0x73, 0x53, 0x7d, 0xf2, 0xd3, 0x33, 0xf3, 0x82, 0x52, 0x0b, 0x85, 0x24, 0xb8, 0xd8, 0x13,
	0x93, 0x93, 0xf3, 0x4b, 0xf3, 0x4a, 0x24, 0x18, 0x15, 0x18, 0x35, 0x38, 0x83, 0x60, 0x5c, 0x21,
	0x29, 0x2e, 0x8e, 0x82, 0xc4, 0xe2, 0xe2, 0xf2, 0xfc, 0xa2, 0x14, 0x09, 0x26, 0xb0, 0x14, 0x9c,
	0xaf, 0xa4, 0xce, 0xc5, 0x8b, 0x64, 0x4a, 0x71, 0x81, 0x90, 0x18, 0x17, 0x5b, 0x51, 0x6a, 0x71,
	0x69, 0x0e, 0xc4, 0x14, 0xd6, 0x20, 0x28, 0x2f, 0x89, 0x0d, 0x6c, 0xb3, 0x31, 0x20, 0x00, 0x00,
	0xff, 0xff, 0x8e, 0x48, 0x90, 0x4b, 0x8b, 0x00, 0x00, 0x00,
}
