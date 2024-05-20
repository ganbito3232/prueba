"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const source_map_support_1 = __importDefault(require("source-map-support"));
const standalone_1 = require("@adonisjs/core/build/standalone");
const path = require("path");

source_map_support_1.default.install({ handleUncaughtExceptions: false });

const appRoot = path.resolve(__dirname, ".");

new standalone_1.Ignitor(appRoot).httpServer().start();
