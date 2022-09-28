/* eslint-disable */
// @generated by protobuf-ts 2.8.1 with parameter eslint_disable
// @generated from protobuf file "ecs-snapshot.proto" (package "ecssnapshot", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { ECSStateSnapshotService } from "./ecs-snapshot";
import type { Worlds } from "./ecs-snapshot";
import type { WorldsRequest } from "./ecs-snapshot";
import type { ECSStateRequestAtBlock } from "./ecs-snapshot";
import type { ECSStateBlockReply } from "./ecs-snapshot";
import type { ECSStateBlockRequestLatest } from "./ecs-snapshot";
import type { ServerStreamingCall } from "@protobuf-ts/runtime-rpc";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { ECSStateReply } from "./ecs-snapshot";
import type { ECSStateRequestLatest } from "./ecs-snapshot";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * The Snapshot Service definition.
 *
 * @generated from protobuf service ecssnapshot.ECSStateSnapshotService
 */
export interface IECSStateSnapshotServiceClient {
  /**
   * Requests the latest ECS state.
   *
   * @generated from protobuf rpc: GetStateLatest(ecssnapshot.ECSStateRequestLatest) returns (ecssnapshot.ECSStateReply);
   */
  getStateLatest(input: ECSStateRequestLatest, options?: RpcOptions): UnaryCall<ECSStateRequestLatest, ECSStateReply>;
  /**
   * Requests the latest ECS state in stream format, which will chunk the state.
   *
   * @generated from protobuf rpc: GetStateLatestStream(ecssnapshot.ECSStateRequestLatest) returns (stream ecssnapshot.ECSStateReply);
   */
  getStateLatestStream(
    input: ECSStateRequestLatest,
    options?: RpcOptions
  ): ServerStreamingCall<ECSStateRequestLatest, ECSStateReply>;
  /**
   * Requests the latest block number based on the latest ECS state.
   *
   * @generated from protobuf rpc: GetStateBlockLatest(ecssnapshot.ECSStateBlockRequestLatest) returns (ecssnapshot.ECSStateBlockReply);
   */
  getStateBlockLatest(
    input: ECSStateBlockRequestLatest,
    options?: RpcOptions
  ): UnaryCall<ECSStateBlockRequestLatest, ECSStateBlockReply>;
  /**
   * Requests the ECS state at specific block.
   *
   * @generated from protobuf rpc: GetStateAtBlock(ecssnapshot.ECSStateRequestAtBlock) returns (ecssnapshot.ECSStateReply);
   */
  getStateAtBlock(
    input: ECSStateRequestAtBlock,
    options?: RpcOptions
  ): UnaryCall<ECSStateRequestAtBlock, ECSStateReply>;
  /**
   * Requests a list of known worlds based on chain state.
   *
   * @generated from protobuf rpc: GetWorlds(ecssnapshot.WorldsRequest) returns (ecssnapshot.Worlds);
   */
  getWorlds(input: WorldsRequest, options?: RpcOptions): UnaryCall<WorldsRequest, Worlds>;
}
/**
 * The Snapshot Service definition.
 *
 * @generated from protobuf service ecssnapshot.ECSStateSnapshotService
 */
export class ECSStateSnapshotServiceClient implements IECSStateSnapshotServiceClient, ServiceInfo {
  typeName = ECSStateSnapshotService.typeName;
  methods = ECSStateSnapshotService.methods;
  options = ECSStateSnapshotService.options;
  constructor(private readonly _transport: RpcTransport) {}
  /**
   * Requests the latest ECS state.
   *
   * @generated from protobuf rpc: GetStateLatest(ecssnapshot.ECSStateRequestLatest) returns (ecssnapshot.ECSStateReply);
   */
  getStateLatest(input: ECSStateRequestLatest, options?: RpcOptions): UnaryCall<ECSStateRequestLatest, ECSStateReply> {
    const method = this.methods[0],
      opt = this._transport.mergeOptions(options);
    return stackIntercept<ECSStateRequestLatest, ECSStateReply>("unary", this._transport, method, opt, input);
  }
  /**
   * Requests the latest ECS state in stream format, which will chunk the state.
   *
   * @generated from protobuf rpc: GetStateLatestStream(ecssnapshot.ECSStateRequestLatest) returns (stream ecssnapshot.ECSStateReply);
   */
  getStateLatestStream(
    input: ECSStateRequestLatest,
    options?: RpcOptions
  ): ServerStreamingCall<ECSStateRequestLatest, ECSStateReply> {
    const method = this.methods[1],
      opt = this._transport.mergeOptions(options);
    return stackIntercept<ECSStateRequestLatest, ECSStateReply>("serverStreaming", this._transport, method, opt, input);
  }
  /**
   * Requests the latest block number based on the latest ECS state.
   *
   * @generated from protobuf rpc: GetStateBlockLatest(ecssnapshot.ECSStateBlockRequestLatest) returns (ecssnapshot.ECSStateBlockReply);
   */
  getStateBlockLatest(
    input: ECSStateBlockRequestLatest,
    options?: RpcOptions
  ): UnaryCall<ECSStateBlockRequestLatest, ECSStateBlockReply> {
    const method = this.methods[2],
      opt = this._transport.mergeOptions(options);
    return stackIntercept<ECSStateBlockRequestLatest, ECSStateBlockReply>("unary", this._transport, method, opt, input);
  }
  /**
   * Requests the ECS state at specific block.
   *
   * @generated from protobuf rpc: GetStateAtBlock(ecssnapshot.ECSStateRequestAtBlock) returns (ecssnapshot.ECSStateReply);
   */
  getStateAtBlock(
    input: ECSStateRequestAtBlock,
    options?: RpcOptions
  ): UnaryCall<ECSStateRequestAtBlock, ECSStateReply> {
    const method = this.methods[3],
      opt = this._transport.mergeOptions(options);
    return stackIntercept<ECSStateRequestAtBlock, ECSStateReply>("unary", this._transport, method, opt, input);
  }
  /**
   * Requests a list of known worlds based on chain state.
   *
   * @generated from protobuf rpc: GetWorlds(ecssnapshot.WorldsRequest) returns (ecssnapshot.Worlds);
   */
  getWorlds(input: WorldsRequest, options?: RpcOptions): UnaryCall<WorldsRequest, Worlds> {
    const method = this.methods[4],
      opt = this._transport.mergeOptions(options);
    return stackIntercept<WorldsRequest, Worlds>("unary", this._transport, method, opt, input);
  }
}